const { exec } = require("child_process");
 
exec("mosquitto_pub -t test -h test.mosquitto.org -f `here goes path to textfile in which result of images are written in`", (error, stdout, stderr) => {
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
