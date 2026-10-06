

import { Child1 } from "./InheritanceChild1";

class Child2 extends Child1 {
    createAccount() {
        console.log("Create a new account");
    }
}

let childobj2 = new Child2();
childobj2.createAccount();
childobj2.loadurl();
childobj2.logininfo();
childobj2.launchbrowser();
childobj2.createprofile();

