const { log } = require("node:console");



//reverse() - reversed a array
let reversevalues = [100,900,600,500]

console.log(reversevalues.reverse()); // [ 500, 600, 900, 100 ]

//join() - convert array into string
console.log(reversevalues.join()); // 500,600,900,100
console.log(reversevalues.join("-")); //500-600-900-100

//map() - tranform every element into a new array
console.log(reversevalues.map((num)=>num*2)); // [ 1000, 1200, 1800, 200 ]
console.log(reversevalues.map((num)=>num/2)); // [ 250, 300, 450, 50 ]

//filter() - to filterout the specific element 
console.log(reversevalues.filter((num)=>num>100)); // [ 500, 600, 900 ]













