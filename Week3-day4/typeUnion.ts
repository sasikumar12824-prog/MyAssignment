//Type alias - used create a custom type 

//1. type union (|) - either one or more
//2. type intersection(&) - 

let loginCredentials:string | number
loginCredentials="username"
loginCredentials = 1244
// loginCredentials=true // not allowed

console.log(loginCredentials);

//creating custom data types 
type customdatatype =string | number |boolean

let logins:customdatatype
logins="welcome"
logins=123
logins= true
console.log(logins);


type browsers = "chrome" | "MSedge"|"firefox"

function invokebrwser (browsername:browsers){

console.log(browsername);


}
invokebrwser("chrome")
