const fs = require('fs');
const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:3630');
var topic = 'testChannel0'
var message = '';

// this script will do the feedback for user - how many images are generated.

fs.readdir('/Users/hasan/Desktop/mqtt',(err, files) => {
    if (err) {
        console.log(err)
    }
    else {
        message = `${(files)}`
    }   
})

client.on('connect', ()=>{
    setInterval(()=>{
        client.publish(topic, message)
        console.log('Message sent!', message)
    }, 5000)
})