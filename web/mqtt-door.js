function doorOpen() {
	// Once a connection has been made, make a subscription and send a message.
	console.log("doorOpen()" )
	
	// PAHO : this.publish = function(topic,payload,qos,retained)
	client.publish(topicPUB, "O", 0, false);
}

function doorClose() {
	// Once a connection has been made, make a subscription and send a message.
	console.log("doorClose()" )
	// PAHO : this.publish = function(topic,payload,qos,retained)
	client.publish(topicPUB, "C", 0, false);
}

