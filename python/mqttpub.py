'''
Created on 26 janv. 2019

@author: laguerin
'''
import time
import paho.mqtt.client as mqtt

clientId = 'python-client-pub'
# host = 'localhost'
host = 'iot.eclipse.org'
# host = 'test.mosquitto.org'
port = 1883
topic = 'devfest/bdm'

# def on_connect(client, userdata, flags, rc):
# def on_connect(client, userdata, rc):
def on_connect(client, userdata, flags, rc):    
    print("Connected with result code " + str(rc) )
    if rc == 0 :
        print("on_connect : OK")
    else:
        print("on_connect : Bad connection Returned code= ",rc)
             
print('Creating MQTT client...')
# (client_id="", clean_session=True, userdata=None, protocol=MQTTv311, transport="tcp"):
mqtt_client = mqtt.Client(clientId)
#mqtt_client.on_connect = on_connect
mqtt_client.on_connect = on_connect  #bind call back function

print('connect...' + host )
mqtt_client.connect(host, port=int(port))


print('publish messages...')
n = 0
while True:
    n = n + 1
    msg = 'Hello ' + str(n)  + ' from Python'
    print('publish : ' + host + ' : ' + topic + ' : message : ' + msg )
    mqtt_client.publish(topic, msg)
    time.sleep(2)

print('disconnect...')
mqtt_client.disconnect()

print('END')

