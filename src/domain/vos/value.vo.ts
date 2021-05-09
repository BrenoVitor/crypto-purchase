import { PurchaseValueInvalidException } from "../exceptions/purchase-value-invalid.exception";

export interface ValueVO {
    value: number
}

export class ValueVOImpl implements ValueVO {
    value: number;

    constructor(value: number){
        if(value <= 0){
            throw new PurchaseValueInvalidException()
        }
        this.value = value
    }

}