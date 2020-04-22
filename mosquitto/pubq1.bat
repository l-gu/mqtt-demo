REM PUB LOOP with QoS 1

for /l %%x in (1, 1, 100) do (
   echo %%x
   mosquitto_pub -h localhost -t a/b/c -m "HELLO WORLD %%x (pub QoS=1)" -q 1
   sleep 2
)