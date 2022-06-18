const fs = require('fs')

const dir = '/path/to/directory'
const sleep = (time) => {
  return new Promise((resolve)=> setTimeout(resolve, time))
}
const looper = async () =>{
for (let i = 0; i < dir.length; i++){
  await sleep(1000)

  fs.readdir(dir, (err, files) => {

     console.log(files.length);
        data='numbers of images generated: ' + files.length;
        fs.writeFileSync('path/to/textfile/to/be/written',data.toString())
      });
}
}
looper()