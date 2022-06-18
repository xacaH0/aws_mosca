//jednostavna skripta koja ce se koristiti na c6a.8xlarge prilikom svakog boot-upa
// `rimraf` je library koji se treba takodje instalirati
/*skriptu treba implementirati na ec2 instanci na iduci nacin:
1.  sudo nano /etc/rc.local  
2.  ~~editovati `rc.local` tako da u njemu pise: node /path/to/aws_startup_script.js 
3. sacuvati i izaci iz `rc.local`;
4. runnati terminal komandu: `chmod +x /etc/rc.d/rc.local` da bi se ova skripta pokrenula prilikom bootupa 
5. nakon sto je path do foldera korektan moze se restartirati sistem komandom `sudo init 6` radi testiranja.
*/

var rimraf = require("rimraf");
rimraf("/home/ec2-user/path_to/output", function () { console.log("done"); });