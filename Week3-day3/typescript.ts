

//implicit inference
let dataVal = "Sasi";
let idval = 123;

console.log(dataVal, typeof dataVal);

//explicit inference
let dataval1: string = "sathya";

console.log(dataval1, typeof dataval1);

//Data types - Any
let employee:any ="sasi"
employee=123
employee=null
employee=undefined
console.log(employee, typeof employee);

//Data types - never
function login():never
{
throw new Error('failed');
}
login()

//Data types - tuple

let id =[1,2,2]

let info:[number,string]=[3,'sasi']
//info[4,'sathya']

console.log(id);
console.log(info);

