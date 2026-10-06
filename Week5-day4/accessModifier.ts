//Access modifiers basics

class Employeesignup{

//properties
public eName:string="Hari";
public eId:number= 1234;
private eSalary:number= 50000;
protected ePhone:number= 9876543210;

//methods
public printDetails(){

    console.log(`Employee Name: ${this.eName}`);
    console.log(`Employee ID: ${this.eId}`);

}

//use get for having read access
public get readData(){
    return this.eSalary;
}

//use set for having write access - update the value of private property
public set writeData(sal:number){
    this.eSalary=sal;
}

}

//create an object of class
let emp = new Employeesignup();
console.log(emp.eId)
console.log(emp.eName)
//console.log(emp.eSalary) //private property cannot be accessed outside the class
//console.log(emp.ePhone) //protected property cannot be accessed outside the class

emp.printDetails()
console.log(emp.readData)
emp.writeData=80000
console.log(emp.readData)