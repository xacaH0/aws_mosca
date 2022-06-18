//Simple script that will be on c6a.8xlarge instance that will be ran on every system bootup

// `rimraf` is lib that has to be installed
/*script will be implemented like this:
1.  sudo nano /etc/rc.local  
2.  ~~edit `rc.local` so it has this command: node /path/to/aws_startup_script.js 
3. save and exit  `rc.local`;
4. run terminal command: `chmod +x /etc/rc.d/rc.local` so the script will be ran on system bootup
5. after making sure everything is good, we can test it out with command: `sudo init 6`, for testing purposes
*/

var rimraf = require("rimraf");
rimraf("/home/ec2-user/path_to/output", function () { console.log("done"); });