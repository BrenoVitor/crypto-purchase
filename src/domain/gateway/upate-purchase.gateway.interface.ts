import { PurchaseStatus } from "../entities/purchase.entity";

export interface UpdatePurchaseGateway {
    updatePurchase: (params: UpdatePurchase.Params) => Promise<void>
}

export namespace UpdatePurchase {
    export type Params = {
        _id: string,
        status: PurchaseStatus
    }
}