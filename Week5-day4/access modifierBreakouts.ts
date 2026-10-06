

class Mathsprogram{

    public a:number=10;
    private b:number=20;       
    
    public add(){
        console.log(`Addition of a and b is: ${this.a+this.b}`);
    }

    private sub(){
        console.log(`Subtraction of a and b is: ${this.a-this.b}`);
    }

    protected mul(){
        console.log(`Multiplication of a and b is: ${this.a*this.b}`);
    }

    public get subtract(){
        return this.sub();
    }

}

let mathsobj = new Mathsprogram();
console.log(mathsobj.a);        
//console.log(mathsobj.b);        //private property cannot be accessed outside the class
mathsobj.add(); 
mathsobj.subtract;                  //private method cannot be accessed outside the class  
//mathsobj.mul();                  //protected method cannot be accessed outside the class

