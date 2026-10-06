

import { Parent } from "./InheritanceParent";

export class Child1 extends Parent{

    createprofile(){
        console.log("Create a new profile")
    }
}

let childobj = new Child1();
childobj.createprofile();
childobj.loadurl();
childobj.logininfo();
childobj.launchbrowser();