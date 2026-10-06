var Mathsprogram = /** @class */ (function () {
    function Mathsprogram() {
        this.a = 10;
        this.b = 20;
    }
    Mathsprogram.prototype.add = function () {
        console.log("Addition of a and b is: ".concat(this.a + this.b));
    };
    Mathsprogram.prototype.sub = function () {
        console.log("Subtraction of a and b is: ".concat(this.a - this.b));
    };
    Mathsprogram.prototype.mul = function () {
        console.log("Multiplication of a and b is: ".concat(this.a * this.b));
    };
    return Mathsprogram;
}());
var mathsobj = new Mathsprogram();
console.log(mathsobj.a);
//console.log(mathsobj.b);        //private property cannot be accessed outside the class
mathsobj.add();
//mathsobj.sub();                  //private method cannot be accessed outside the class  
//mathsobj.mul();                  //protected method cannot be accessed outside the class
