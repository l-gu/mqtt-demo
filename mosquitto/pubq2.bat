REM PUB LOOP with QoS 2

for /l %%x in (1, 1, 100) do (
   echo %%x
   mosquitto_pub -h localhost -t a/b/c -m "HELLO WORLD %%x (pub QoS=2)" -q 2 
   sleep 2
)