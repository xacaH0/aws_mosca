const { exec } = require("child_process");
 // skripta ce biti na t2.micro instanci. Treba jos da se razvije queue i ostala logika.

 // Plan je da vucemo user input pri klikom na dugme "Generate" i ova skripta dolazi u izrazaj.

 //skriptu ce pokretati instanca koja je uvijek live i slusa frontend za userov input.

 
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