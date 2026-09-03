//"var" allows to redeclare and reassign the values

const { log } = require("node:console");

var course="playwright"
var course=1234
console.log(course);

course="playwright+"
console.log(course);

//"Let" should not allowed redeclaration but reassigning is possible - most used for variable declaration

let salary = 2000000
//let salary - not allowed redeclared
salary=5000000
console.log(salary);
console.log(typeof salary);

//"Const"
const pi=3.14
//const pi - not allowed redeclared
pi = "pie value"
console.log(pi); //type error - cannot print the reassigning




