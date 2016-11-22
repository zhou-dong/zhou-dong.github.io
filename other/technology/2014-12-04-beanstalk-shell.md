---
layout: page
title: Shell of Totem Beanstalk
tagline: -- details of beanstalk.sh

---


#### start.sh
<pre><code class="Bash">
#!/bin/sh

LOG_DIR=/app/logs/beanstalk
PID=`ps aux |grep beanstalkd |grep -v grep |awk '{print $2}'`

start()
{
	PID=`ps aux |grep beanstalkd |grep -v grep |awk '{print $2}'`

	if [ -n "$PID" ];
		then 
			echo ".....address already in use......"
			exit
	fi


	if [ -d /app/logs/beanstalk ];
  		then
			echo "begin to start..."
	  	else 
			echo "begin to make log file and start..."
			mkdir -p /app/logs/beanstalk
	fi 

	nohup ./beanstalkd -z 52428800 -l 0.0.0.0 -p 11300  -V >$LOG_DIR/start.log 2>&1 </dev/null &

	echo "beanstalkd is running..."
}

stop()
{

        if [ -n "$PID" ];
                then
                        echo "stop ..."
			kill -9 $PID
        fi	
}

info()
{
	echo `tail -n 2 $LOG_DIR/start.log`
	exit
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
	'info')
		info
		;;
	*)
		echo "pls type $0 {start|stop|restart|info}"

	exit 1
esac

</code></pre>
