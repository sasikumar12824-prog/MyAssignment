

abstract class browserSetting {


    //implemented property
    browsername: string="chrome"

    //unimplemented property
    abstract version: number;

    //unimplemented method
    abstract snap(): void; 

    //implemented method
    alert() {
        console.log("Alerting!");
    }

}

//we cannot create object of abstract class
//we can create object of child class which is extending the abstract class wrappedMethod

//normal class which is extending the abstract class
class wrappedMethodchild extends browserSetting {
    version: number= 1.0;
    snap(): void {
        console.log("Snapping!");
    }
}

let obj = new wrappedMethodchild();
obj.alert();
obj.snap();
console.log(obj.browsername);
console.log(obj.version);