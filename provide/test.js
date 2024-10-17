const accountId = 199340
let accountEmail = "sajidulsejam@gmail.com"
var accountPassword = "239404982"
accountCity = "Barishal"
let accountState;

//accountId = 2 // not allowed

accountEmail = "gghfj@gmail.com"
accountPassword = "2938409"
accountCity = "Dhaka"

/* prefer not to use var because of issue in block scope 
and functional scope 
*/
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState])

