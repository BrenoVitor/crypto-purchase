import { CreditCardTokenVO, CreditCardTokenVOImpl } from "../vos/credit-card-token.vo";
import { UserDocumentVO, UserDocumentVOImpl } from "../vos/user-document.vo";
import { ValueVO, ValueVOImpl } from "../vos/value.vo";

export interface PurchaseEntity {
    userDocument: UserDocumentVO,
    creditCardToken: CreditCardTokenVO,
    value: ValueVO,
    status: PurchaseStatus

    getUserDocument(): string

    getCreditCardToken(): string
}

export class PurchaseEntityImpl implements PurchaseEntity {
    userDocument: UserDocumentVO;
    creditCardToken: CreditCardTokenVO;
    value: ValueVO;
    status: PurchaseStatus;

    constructor(userDocument: string, CreditCardToken: string, value: number, status: PurchaseStatus){
       this.creditCardToken = new CreditCardTokenVOImpl(CreditCardToken)
       this.value = new ValueVOImpl(value)
       this.status = status
       this.userDocument = new UserDocumentVOImpl(userDocument)
    }

    getUserDocument(): string {
        return this.userDocument.userDocument
    }

    getCreditCardToken(): string {
        return this.creditCardToken.creditCardToken
    }

    

}

export enum PurchaseStatus {
    CREATED,
    CANCELED,
    PROCESSED,
    REFUNDED,
    FAILED,
}