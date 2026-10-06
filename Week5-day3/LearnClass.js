"use strict";
class LearnClass {
    //properties -> data of an object
    browserType = "Chrome";
    browserVersion = 114;
    //methods -> for actionable - functions of an object
    launchBrowser() {
        console.log("Launching the browser");
    }
    loadUrl() {
        console.log("Loading the URL");
    }
    /* //default constructor -> special method which will be executed when object is created
    constructor(){
        console.log("This is default constructor");
    
    } */
    //parameterized constructor
    constructor(Type, Version) {
        this.browserType = Type;
        this.browserVersion = Version;
        console.log("This is parameterized constructor");
    }
}
//creating object of class
let objcreated = new LearnClass("Firefox", 115);
console.log(objcreated.browserType);
console.log(objcreated.browserVersion);
objcreated.launchBrowser();
objcreated.loadUrl();
