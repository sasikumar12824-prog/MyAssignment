
class HR extends Employeesignup {

    empupdate(){
      
        console.log(`Employee Phone: ${this.ePhone}`); //protected property can be accessed in child class
    }
}

let hr = new HR()
hr.empupdate()