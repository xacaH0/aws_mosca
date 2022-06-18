const mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:3630');
const topic =  'testChannel0';

client.on('message', (topic, message)=>{
    message = message.toString();
    console.log(message)
})
client.on('connect', ()=>{
    client.subscribe(topic)
})