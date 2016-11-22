---
layout: page
title: Shell of Totem Appserver
tagline: -- details of  appserer.sh
---


#### appserver.sh

<pre><code class="Bash">
#!/bin/sh

UNNING_USER=root
APP_HOME=/workspace/totem
APP_MAINCLASS=org.x.server.app.AppServer

CLASSPATH=$APP_HOME
for i in "$APP_HOME"/lib/*.jar; do
CLASSPATH="$CLASSPATH":"$i"
done

export MALLOC_CHECK_=0

if [ `free -g |grep Mem |awk '{print $2}'` -ge  70 ]
   then 
     JAVA_OPTS="-server -Xms65536m -Xmx65536m -Xmn2048m -Djava.awt.headless=true -XX:MaxPermSize=256m"
   else
     JAVA_OPTS="-server -Xms24576m -Xmx24576m -Xmn2048m -Djava.awt.headless=true -XX:MaxPermSize=256m"
fi

psid=0

checkpid()
{
javaps=`$JAVA_HOME/bin/jps -l | grep $APP_MAINCLASS`
if [ -n "$javaps" ]; then
psid=`echo $javaps | awk '{print $1}'`
else
psid=0
fi
echo "psid=$psid"
}


start()
{
checkpid
if [ $psid -ne 0 ]; then
echo "================================"
echo "warn: $APP_MAINCLASS already started! (pid=$psid)"
echo "================================"
else
echo -n "Starting $APP_MAINCLASS ..."
JAVA_CMD="nohup java $JAVA_OPTS -classpath $CLASSPATH $APP_MAINCLASS > /app/logs/appserver.log 2>&1 </dev/null &"
su -c "$JAVA_CMD"
checkpid
if [ $psid -ne 0 ]; then
echo "(pid=$psid) [OK]"
else
echo "[Failed]"
fi
fi
}

stop()
{
checkpid
if [ $psid -ne 0 ]; then
echo -n "Stopping $APP_MAINCLASS ...(pid=$psid) "
kill -9 $psid
if [ $? -eq 0 ]; then
echo "[OK]"
else
echo "[Failed]"
fi
checkpid
if [ $psid -ne 0 ]; then
stop
fi
else
echo "================================"
echo "warn: $APP_MAINCLASS is not running"
echo "================================"
fi
echo "===remove index lock tlog bigqueue"
rm -f /server/solr/product/data/index/*.lock
rm -rf /server/bigqueue/logs/ModuleQueue/*
rm -rf /server/bigqueue/logs/schedule/*
rm -rf /server/bigqueue/logs/searchlogs/*
}

status()
{
checkpid
if [ $psid -ne 0 ];  then
echo "$APP_MAINCLASS is running! (pid=$psid)"
else
echo "$APP_MAINCLASS is not running"
fi
}

info()
{
echo "System Information:"
echo "****************************"
echo `head -n 1 /etc/issue`
echo `uname -a`
echo
echo "JAVA_HOME=$JAVA_HOME"
echo `$JAVA_HOME/bin/java -version`
echo
echo "APP_HOME=$APP_HOME"
echo "APP_MAINCLASS=$APP_MAINCLASS"
echo "****************************"
}

case "$1" in
'start')
start
;;
'stop')
stop
;;
'restart')
stop
start
;;
'status')
status
;;
'info')
info
;;
*)
echo "Usage: $0 {start|stop|restart|status|info}"
exit 1
esac
exit 0
</code></pre>

