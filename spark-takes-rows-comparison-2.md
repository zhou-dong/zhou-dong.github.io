# Takeaway of Switching Streaming Input from Parquet to Delta

## Background
As part of switching the streaming input source from Parquet to Delta, we needed to copy some testing data from production to the testing environment. During this data copy process, I learned the differences and nuances between `df.take()`, `df.limit()`, and `df.sample()`.

## Comparison of `take()`, `limit()`, and `sample()`

### `df.take(n)`
- **Description:** Fetches the first `n` rows by scanning partitions **one by one** until `n` rows are collected.
- **Pros:**
  - Efficient for large datasets because it stops early.
  - Retrieves data quickly for small previews.
- **Cons:**
  - Data is pulled into the driver, so it cannot handle very large amounts.
  - The retrieved rows may not be representative of the entire dataset since they come from the first partitions only.

**Log Example:**
```
[INFO] Fetching first 10 rows using take()
[DEBUG] Scanning partition 1
[DEBUG] Scanning partition 2
[INFO] Retrieved 10 rows, stopping early
```

### `df.limit(n)`
- **Description:** Retrieves up to `n` rows **from each partition**, then reduces the results to get exactly `n` rows.
- **Pros:**
  - Ensures an exact number of rows are returned.
  - Works in a distributed manner.
- **Cons:**
  - Reads from **all partitions**, which can be inefficient for large datasets.
  - Does not stop early, potentially scanning all underlying files.

**Log Example:**
```
[INFO] Fetching 10 rows using limit()
[DEBUG] Scanning partition 1
[DEBUG] Scanning partition 2
[DEBUG] Scanning partition 3
[INFO] Reducing results to exactly 10 rows
```

### `df.sample(fraction, withReplacement=False, seed=None)`
- **Description:** Randomly samples approximately `fraction` (e.g., `0.1` for 10%) of rows **from each partition**.
- **Pros:**
  - Provides a random subset of the data.
  - Can generate unbiased samples.
- **Cons:**
  - The number of rows is **not exact**.
  - Scans **all partitions**, making it inefficient for large datasets.

**Log Example:**
```
[INFO] Sampling 10% of data using sample()
[DEBUG] Scanning partition 1
[DEBUG] Scanning partition 2
[DEBUG] Scanning partition 3
[INFO] Retrieved approximately 10% of total data
```

## Performance Comparison
| Method          | Reads All Partitions? | Stops Early? | Best Use Case |
|----------------|----------------------|--------------|---------------|
| `df.take(n)`   | ❌ No                 | ✅ Yes       | Quick preview of data |
| `df.limit(n)`  | ✅ Yes                | ❌ No        | Retrieving an exact number of rows |
| `df.sample()`  | ✅ Yes                | ❌ No        | Random, unbiased subset |

## Best Practices
- **For a quick data preview:** Use `df.take(n)`.
- **For retrieving an exact number of rows:** Use `df.limit(n)`, but be aware that it scans all partitions.
- **For a more efficient random subset:** Instead of `df.sample()`, use:
  ```scala
  df.orderBy(functions.rand()).limit(n)
  ```
  This approach randomly orders the dataset and retrieves `n` rows, reducing unnecessary scanning.

Understanding these differences helps in optimizing performance and resource utilization in Spark applications. 🚀
