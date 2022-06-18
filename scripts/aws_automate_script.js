const { exec } = require("child_process");
// this script will be on t2.micro instance. It needs more developing on the queue factor and remaining logic.
// Plan is to get the user input when the "Generate" button is pressed this script will do the rest of the work.
// Also t2.micro instance that runs this script will be live most of the time and will listen to the frontend for user input.
 
exec("aws ec2 start-instances --instance-ids `ovde ide ID instance koja se treba pokrenuti`", (error, stdout, stderr) => {
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

exec("aws ec2 stop-instances --instance-ids `-||-`", (error, stdout, stderr) => {
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