import { PurchaseInvalidFieldException } from "./purchase-invalid-field.exception.abstract";

export class PurchaseValueInvalidException extends PurchaseInvalidFieldException {

    constructor(msg?: string){
        super(`value`, 'PurchaseValueInvalidException', msg)
    }
}