import { RBI } from "./interface";


abstract class BaseBank implements RBI {

    //Common properties for all banks
    AccountType: string="Saving";

    //Abstract properties for all banks
    abstract BankBranch: string;
    abstract IFSCCode: string;
    abstract Accountnumber: number;    
    
    //Common methods 
    Deposit(){
        console.log("Depositing money in the bank");
    }

    OpenAccount(){
        console.log("Opening account in the bank");
    }

    //unimplemented methods for all banks
    abstract Withdraw(): void;
    abstract RateOfInterest(): void;


} 

//concrete class for abstract class prperty and method implementation

class SBI extends BaseBank {
    BankBranch: string="SBI Main Branch" 
    IFSCCode: string="SBI0001"
    Accountnumber: number=1234567890        
        
    Withdraw(): void {
        console.log("Withdrawing money from SBI bank");
    }       
    RateOfInterest(): number {
        console.log("Rate of interest for SBI bank is 5%");
        return 5;
    }

}


let objsbi = new SBI();
console.log(objsbi.AccountType);
console.log(objsbi.BankBranch);
console.log(objsbi.IFSCCode);
console.log(objsbi.Accountnumber);
objsbi.Deposit();
objsbi.OpenAccount();
objsbi.Withdraw();
let interest = objsbi.RateOfInterest();
console.log(`Rate of interest: ${interest}%`);
console.log("---------------------------------------------------");       
