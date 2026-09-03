//function scope : var 

//Block scope: let and const


let browserVersion = "chrome"

function getBrowerVersion(browserVersion)
{
    if(browserVersion==="chrome")
    {
        let browserVersion="firefox"
        console.log("inside if "+browserVersion);        
    }
    console.log("outside if " + browserVersion);     
}

getBrowerVersion(browserVersion)
console.log(browserVersion)
