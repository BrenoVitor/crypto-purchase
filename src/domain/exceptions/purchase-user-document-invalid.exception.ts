import { PurchaseInvalidFieldException } from "./purchase-invalid-field.exception.abstract"

export class PurchaseUserDocumentInvalidException extends PurchaseInvalidFieldException {

    constructor(msg?: string){
        super('userDocument', 'PurchaseUserDocumentInvalidException', msg)
    }

}