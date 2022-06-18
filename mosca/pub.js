const fs = require('fs');
const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:3630');
var topic = 'testChannel0'
var message = '';

// ova skripta ce se koristiti za feedback useru -  dokle je stiglo generisanje slika

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