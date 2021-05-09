import { PurchaseCreditCardTokenInvalidException } from "../exceptions/purchase-credit-card-token-invalid.exception";

export interface CreditCardTokenVO {
    creditCardToken: string
}

export class CreditCardTokenVOImpl implements CreditCardTokenVO {
    creditCardToken: string;

    constructor(creditCardToken: string){
        if(creditCardToken){
            throw new PurchaseCreditCardTokenInvalidException
        }
        this.creditCardToken = creditCardToken
    }

}
