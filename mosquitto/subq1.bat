REM SUB with QoS 1 and KEEP SESSION

mosquitto_sub -v -h localhost -t a/b/c     -q 1  -c  -i MYID
