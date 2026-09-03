//Contional statement, Looping, jumping

/*Contional statement
swith Condition
*/

let browserVersion=160

switch (browserVersion) 
{
    case 160:
        console.log("edge")        
        break;

            case 180:
        console.log("chrome")        
        break;
        
        case 190:
        console.log("firefox")        
        break;

    default:
                console.log("NO")
                        break;
}


// Funtions usages

function broswerWindow(browserVersions)
{
    switch (browserVersions) 
{
    case 160:
        console.log("edge")        
        break;

            case 180:
        console.log("chrome")        
        break;
        
        case 190:
        console.log("firefox")        
        break;

    default:
                console.log("NO")
                        break;
}
}
console.log(broswerWindow(180))
