const { exec } = require("child_process");
 
exec("mosquitto_pub -t test -h test.mosquitto.org -f `ovde ide textfile u kojem je izgenerisan broj slika`", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
