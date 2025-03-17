# Efficient Column Pruning in Delta Lake with Apache Spark

Background

Delta Lake, built on top of Apache Spark, is a powerful storage layer that provides ACID transactions and schema enforcement for big data workloads. 
However, one key challenge when working with Delta tables is ensuring efficient column pruning, especially when dealing with deeply nested structures. 
Without proper optimization, Spark may read more data than necessary, leading to performance issues.

### Understanding Column Pruning

Column pruning refers to the process of reading only the required columns instead of scanning the entire schema. 
While Spark supports column pruning in Parquet and Delta formats, there are certain limitations when working with Delta Lake, 
particularly with deeply nested fields.

### Issues Observed in Delta Column Pruning

Delta Lake does not support user-defined schemas, whereas Parquet does. 
Instead, Delta Lake enforces schema inference from its transaction logs, 
which can result in reading more columns than necessary, especially when dealing with deeply nested arrays.

#### 1. Delta Struggles with Deeply Nested Arrays
- Delta Lake efficiently prunes columns for single-level nested arrays.
- However, when dealing with deeply nested arrays, Spark may read the entire parent structure instead of just the selected fields.
- For example, if a column is accessed inside a deeply nested array of structs, Spark may load all sibling fields and its children fields, leading to performance overhead.
- A workaround is to read the shallow fields instead of deeply nested fields.

#### 2. Impact of spark.sql.codegen.maxFields.
- If the total number of fields in a query exceeds the spark.sql.codegen.maxFields limit, Spark may fall back to reading entire rows instead of pruning unnecessary columns.
- This occurs because exceeding the field limit disables Spark's efficient code generation, leading to performance degradation.
- To mitigate this issue, you can:
    - Increase the spark.sql.codegen.maxFields value (default: 100), though this may impact memory usage.
    - Optimize the schema by reducing the number of selected fields when possible.
#### 3. Delta Lake infer more fields than necessary using case class.
- If Delta Lake uses a case class to infer the schema, it may read more fields than necessary.
- To avoid this, it is recommended to explicitly select the required columns instead of relying on a case class for schema inference.

### Examples

#### Avoid Scanning Entire StructType

```
root
 |-- dateHour: string (nullable = true)
 |-- requestId: string (nullable = true)
 |-- eventTimestamp: timestamp (nullable = true)
 |-- waterfallAttempts: array (nullable = true)
 |    |-- element: struct (containsNull = true)
 |    |    |-- waterfallAttemptId: string (nullable = true)
 |    |    |-- adSources: array (nullable = true)
 |    |    |    |-- element: struct (containsNull = true)
 |    |    |    |    |-- adSourceId: integer (nullable = true)
 |    |    |    |    |-- adSourceType: integer (nullable = true)
 |    |    |    |    |-- bids: array (nullable = true)
 |    |    |    |    |    |-- element: struct (containsNull = true)
 |    |    |    |    |    |    |-- bidId: string (nullable = true)
 |    |    |    |    |    |    |-- bidType: string (nullable = true)
 |    |    |    |    |    |    |-- bidResult: integer (nullable = true)
```

Instead of:
```
df.withColumn("slotCount", size($"waterfallAttempts"))
```
Use:
```
df.withColumn("slotCount", size($"waterfallAttempts.waterfallAttemptId"))
```

#### Explicitly select the required columns

```
session
  .read
  .format("delta")
  .load(deltaTableRoot)
  .filter(col("dateHour") === dateHour)
  .filter(col("requestId").isNotNull)
  .withColumn("slotCount", size($"waterfallAttempts.waterfallAttemptId"))
  .withColumn("impressionCount", countImpsUDF($"beacons.type"))
  .withColumn("marketplaceIds", extractMarketplaceIdsUDF($"ads.marketplaceId"))
  .withColumn("deviceId", $"app".getItem("deviceId"))
  .withColumn("timestamp", getTimestampUDF($"eventTimestamp"))
  .withColumn("supplyId", $"supplyId".cast(LongType))
  .withColumn("brandId", $"brandId".cast(LongType))
  .withColumn("adUnitId", $"adUnitId".cast(LongType))
```

#### Debugging

```
(1) Scan parquet 
Output [22]: [requestId#46, eventTimestamp#47, ipAddress#54, seatId#69, publisherId#70, brandId#71, supplyId#72, adUnitId#73, customValue1#76, customValue2#77, customValue3#78, customValue4#79, geo#87, vid#88, dev#89, app#90, site#91, waterfallAttempts#98, ads#101, beacons#102, dateHour#44, minuteWindow#45]
Batched: true
Location: PreparedDeltaFileIndex [file:/Users/dozhou/workspace/forecasting-magnite-streaming-spark/src/test/resources/adstats/external/ads_beacons_join_v4]
PartitionFilters: [isnotnull(dateHour#44), (dateHour#44 = 2025-01-30-01)]
PushedFilters: [IsNotNull(requestId)]
ReadSchema: struct<requestId:string,eventTimestamp:timestamp,ipAddress:string,seatId:int,publisherId:int,brandId:int,supplyId:int,adUnitId:int,customValue1:string,customValue2:string,customValue3:string,customValue4:string,geo:struct<country:string,region:string,postalCode:string,dmaCode:int>,vid:struct<videoId:string>,dev:struct<os:string,platformId:int>,app:struct<deviceId:string,bundleId:string>,site:struct<siteDomain:string>,waterfallAttempts:array<struct<waterfallAttemptId:string>>,ads:array<struct<marketplaceId:int>>,beacons:array<struct<type:string>>>
```

- checking for ***Batched: true***
- proper `PartitionFilters` and `PushedFilters`
- ensuring ReadSchema ***only*** includes necessary fields. 
