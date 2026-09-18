"use strict";
//Type alias - used create a custom type 
//1. type union (|) - either one or more
//2. type intersection(&) - 
let loginCredentials;
loginCredentials = "username";
loginCredentials = 1244;
// loginCredentials=true // not allowed
console.log(loginCredentials);
let logins;
logins = "welcome";
logins = 123;
logins = true;
console.log(logins);
function invokebrwser(browsername) {
    console.log(browsername);
}
invokebrwser("chrome");
