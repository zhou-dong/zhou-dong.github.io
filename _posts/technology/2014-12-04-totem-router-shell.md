---
layout: page
title: Shell of Totem Router
tagline: -- details of router.sh

---
{% include JB/setup %}

#### router.sh
<pre class="prettyprint linenums"> 
#!/bin/sh

RUNNING_USER=root
APP_HOME=/workspace/totem
APP_MAINCLASS=org.x.server.router.RouterServer

CLASSPATH=$APP_HOME
for i in "$APP_HOME"/lib/*.jar; do
CLASSPATH="$CLASSPATH":"$i"
done

export MALLOC_CHECK_=0

JAVA_OPTS="-server -Xms8192m -Xmx8192m -Xmn1024m -Djava.awt.headless=true -XX:MaxPermSize=128m"

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
JAVA_CMD="nohup java $JAVA_OPTS -classpath $CLASSPATH $APP_MAINCLASS > /app/logs/router.log 2>&1 </dev/null &"
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
echo "===remove bigqueue"
rm -rf /server/bigqueue/logs/indexlogs/*

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

</pre>
