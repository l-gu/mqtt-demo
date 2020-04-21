'''
Created on 26 janv. 2019

@author: laguerin
'''
import paho.mqtt.client as mqtt

clientId = 'python-client-sub'
# host = 'localhost'
host = 'iot.eclipse.org'
# host = 'test.mosquitto.org'
port = 1883
# topic = 'devfest/bdm'
topic = 'devfest/bdm/#'

             
print('Creating MQTT client...')
def on_connect(client, userdata, flags, rc):    
    print("Connected with result code " + str(rc) )
#    client.subscribe(topic)


def on_message(client, userdata, msg):
    print(host + " : " + msg.topic + " : " + str(msg.payload))


mqtt_client = mqtt.Client(clientId)

mqtt_client.on_connect = on_connect
mqtt_client.on_message = on_message

print('connect... ' + host)
mqtt_client.connect(host, port=int(port))
# mqtt_client.connect("broker.hivemq.com", 1883, 8000)

print("Subscribe...")
mqtt_client.subscribe(topic)

print("Listen...")
mqtt_client.loop_forever()

print('END')

