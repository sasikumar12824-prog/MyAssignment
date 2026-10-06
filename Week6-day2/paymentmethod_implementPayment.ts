import { Payment } from "./interfacePayment";


class UPI implements Payment {

    PaymentType: string = "UPI";
    PaymentMethod: string= "Google Pay";
    PaymentAmount: number= 1000;

    MakePayment(): number {
        console.log(`Making payment of ${this.PaymentAmount} using ${this.PaymentMethod} via ${this.PaymentType}`);
        return this.PaymentAmount;
    }   

    RefundPayment(): number {
        console.log(`Refunding payment of ${this.PaymentAmount} using ${this.PaymentMethod} via ${this.PaymentType}`);
        return this.PaymentAmount;
    }

    GetPaymentDetails(): string {
        console.log(`Payment Type: ${this.PaymentType}`);
        console.log(`Payment Method: ${this.PaymentMethod}`);
        console.log(`Payment Amount: ${this.PaymentAmount}`);
        return this.PaymentAmount.toString();
        return this.PaymentMethod;
        return this.PaymentType;
    }

}

    let upiobj = new UPI();
    upiobj.MakePayment();
    upiobj.RefundPayment();
    upiobj.GetPaymentDetails();
    console.log(`Payment Type: ${upiobj.PaymentType}`); 
    console.log(`Payment Method: ${upiobj.PaymentMethod}`);
    console.log(`Payment Amount: ${upiobj.PaymentAmount}`);
