var mosca = require('mosca')
var settings = {port:3630}
var broker = new mosca.Server(settings)

broker.on('ready', ()=>{
    console.log('broker is live')
})