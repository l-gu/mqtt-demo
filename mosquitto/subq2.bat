REM SUB with QoS 2 and KEEP SESSION

mosquitto_sub -v -h localhost -t a/b/c     -q 2  -c  -i MYID
