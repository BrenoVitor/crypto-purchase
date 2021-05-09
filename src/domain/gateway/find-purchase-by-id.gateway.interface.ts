import { PurchaseStatus } from "../entities/purchase.entity"

export interface FindPurchaseByIdGateway {
    findPurchaseById: (params: FindPurchaseById.Params) => Promise<FindPurchaseById.Result>
}

export namespace FindPurchaseById {
    export type Params = {
        _id: string
    }
    export type Result = {
        _id: string,
        userDodument: string,
        creditCardToken: string,
        value: number,
        status: PurchaseStatus
    }
}