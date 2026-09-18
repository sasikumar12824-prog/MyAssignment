"use strict";
function print() {
    console.log("function is printed");
    return "hello";
}
print();
console.log(print());
//Parameter function
function add(x, y) {
    console.log(x + y);
}
add(10, 20);
console.log(add(80, 10));
function adding(x, y) {
    return x + y;
}
adding(50, 50);
console.log(adding(60, 60));
