import { PurchaseInvalidFieldException } from "./purchase-invalid-field.exception.abstract";

export class PurchaseCreditCardTokenInvalidException extends PurchaseInvalidFieldException {

    constructor(msg?: string){
        super('creditCardToken', 'PurchaseCreditCardToeknInvalidException', msg)
    }
    
}