

export interface Payment {
    //Unimplemented properties
    PaymentType: string;
    PaymentMethod: string;
    PaymentAmount: number;

    //Unimplemented methods
    MakePayment(): number;
    RefundPayment(): number;
    GetPaymentDetails(): string;
}   

