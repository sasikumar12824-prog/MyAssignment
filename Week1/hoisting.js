//hoisting - default behavior of js
//memory creation + execution phase

var a=10
console.log(a);

console.log(b);
var b=20
// before assigning value if we print then shows undefined is printed

//--------------------------
let c=10
console.log(c);

console.log(d);
let d=20
// before assigning value if we print then shows reference error

//----------------------------
console.log(e);
const e=20

//TDZ (temporal dead zone) - let case