//funtion - mainly for resuable 

//types 
//Named functions 

function greet()
{
    console.log("learn function");    
}
greet();

//----------------------
function greet2()
{
    return "learn function"  
}
console.log( greet2());



//function expresssions or anonymous function

let welcome = function()  //withut function name - varibale will be the function as locally
{
console.log("hi");
}
welcome() 


//arrow function
let add = (a,b)=>a+b
console.log(add(2,3));

//callback function - 

function login(cb1,cb2)
{
    console.log("login");
    cb1()
    cb2()
}

function entername()
{
    console.log("name");
    
}

function enterage()
{
    console.log("age");
    
}

login(entername,enterage)

