//Functions-> reusability

let a=10, b=20
console.log(a+b);

let x=0,y=40
console.log(x+y);

// above repeated steps can be changes use functions--------------------------------------
function add1(a,b)
{
    let c= a+b
    console.log(c);    
}
add1(1,2)

// above repeated steps can be changed by use functions--------------------------------------
function add(a,b)
{
    let c= a+b
    return c
}
console.log(add(5,5));
 