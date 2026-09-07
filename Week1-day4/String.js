//String -> '', "", 
//String literal -> compare the variable and values - if same values occurs same memory instead of new memory
let company = "test"
let firm = "test"

console.log(company===firm); //true
console.log(company==firm); //true

//String object -> compare the reference of string - create every time memories 

let company1 = new String("test");
let firm1 = new String("test");

console.log(company1===firm1); //false - same value but diff memory so false
console.log(company1==firm1); //true  - same value but diff memory so false but this double equal shows true so avaoid

//index, length 
//index is posititon starts from 0 - p, 1-l, 2-a, 3-y
//length starts from 1-p, 2-l, 3-a, 4-y

let course = "play"
console.log(course.length); //4

//escape sequences (\ - without error while using quotes, \t - tab space, \n - next line)
let data = 'it\'s a \nregression te\tsting'
console.log(data);

//concat() - "+", `${}` - template literal

let v1 ="4"
let v2 = "testcases"

console.log(v1+v2); //4testcases
console.log(v1.concat (v2)); //4testcases
console.log(`${v1} ${v2}`); //4 testcases - properly works 

//charAt - this method for character position
console.log(v2.charAt('4')); //c

//indexof() - position number
console.log(v2. indexOf('t')); //0
console.log(v2. indexOf('t', 2)); //3
console.log(v2. indexOf('e',3)); //7

//slice - extract the portion  of string - like cake slice 

let courses = "playwright"
console.log(courses.slice(2,10)); //aywright
console.log(courses.slice(4));//wright

//allow negative values that means values get from back to front 
console.log(courses.slice(6));//ight
console.log(courses.slice(-6));//wright
//not allow swap the start and end values 
console.log(courses.slice(8,1)); //not allwed 

//substring - extract the portion  of string 
console.log(courses.substring(2,10)); //aywright

//not allowed negative values 
//allow swap the start and end values 
console.log(courses.substring(8,1)); // allwed and print the correct values

console.log(courses.substring()); //nothing specified then full string will displayed - playwright

//Split() -> its convert the string to array
let words = "this is good"
console.log(words.split()); // [ 'this is good' ]
console.log(words.split("")); //  't', 'h', 'i', 's',
console.log(words.split(" ")); //space added - [ 'this', 'is', 'good' ]
console.log(words.split("i")); // [ 'th', 's ', 's good' ]





