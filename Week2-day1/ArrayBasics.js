//Array is collection of element of similar data types 
//Array is non primitive data type

const { log } = require("node:console");

/* varible assign
let name = "sasi"
let age = 29
*/

//Array 
let arr=["sasi", 29, true]

//Callin full values
console.log(arr); //sasi, 29, true
//Clling specific value
console.log(arr[0]); //sasi

//adding element in this array
arr[3]="Welcome"
console.log(arr);

//change the values in array 
arr[1]=30
console.log(arr);

//push(values, values2) - used to add one or more values at the end of array
arr.push(1000, "playwright")
console.log(arr) //[ 'sasi', 30, true, 'Welcome', 1000, 'playwright' ]

//pop() - used t remve only one values at the end of the array 
let poppedarray = arr.pop();
console.log(poppedarray); //playwright
console.log(arr); //[ 'sasi', 30, true, 'Welcome', 1000 ]

//unshift() - add one or more values in beginning of the array
let unsshiftted = arr.unshift("apple", 200)
console.log(unsshiftted); // 7 - length
console.log(arr); // [ 'apple', 200, 'sasi', 30, true, 'Welcome', 1000 ]

//shift() - remove 1 element at the beginning
let shiftted = arr.shift();
console.log(shiftted); // apple - removed in array
console.log(arr); // [ 200, 'sasi', 30, true, 'Welcome', 1000 ] 

//slice() - extract the portion of the array - it will not alter or modify the existing array
//    0     1      2    3      4         5
// [ 200, 'sasi', 30, true, 'Welcome', 1000 ]

let slicedvalues = arr.slice(1,4);
console.log(slicedvalues); // [ 'sasi', 30, true ]
console.log(arr); // [ 200, 'sasi', 30, true, 'Welcome', 1000 ]

//Splice() - to add element, delete values from array
//splice() to modify the original array 
//first index= start index
//second index = delete count

let splicedvalues = arr.splice(2,3)
console.log(splicedvalues); // [ 30, true, 'Welcome' ]
console.log(arr); // [ 200, 'sasi', 1000 ]

let splicedvalues2 = arr.splice(1,0, "kumar", "krishnan")
console.log(splicedvalues2); // [] - empty since no delete operation
console.log(arr); // [ 200, 'kumar', 'krishnan', 'sasi', 1000 ]

//sort - arranging - ansii table 
let num = [6,1,4,7,9,45,67]
console.log(num.sort()); // 1, 4, 45, 6,  67, 7,  9 -> sort based on first number

let mixedarray = [1,"playwright", "apple", 200, 500]
console.log(mixedarray.sort()) // [ 1, 200, 500, 'apple', 'playwright' ]

//ascending order 
console.log(num.sort((a,b)=>a-b));

//desending order 
console.log(num.sort((a,b)=>b-a));









