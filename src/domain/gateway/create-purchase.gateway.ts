import { PurchaseStatus } from "../entities/purchase.entity"

export interface CreatePurchaseGateway {
    createPurchase: (params: CreatePurchase.Params) => Promise<CreatePurchase.Result>
}

export namespace CreatePurchase {
    export type Params = {
        userDocument: string,
        creditCardToken: string,
        value: number,
        status: PurchaseStatus
    }

    export type Result = {
        _id: string,
    }

}