import { PurchaseUserDocumentInvalidException } from "../exceptions/purchase-user-document-invalid.exception";

export interface UserDocumentVO {
    userDocument: string
}

export class UserDocumentVOImpl implements UserDocumentVO {
    userDocument: string;
    constructor(userDocument: string){
        if(!userDocument){
            throw new PurchaseUserDocumentInvalidException()
        }
        this.userDocument = userDocument
    }
}