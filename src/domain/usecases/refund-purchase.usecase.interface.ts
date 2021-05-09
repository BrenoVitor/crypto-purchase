export interface RefundPurchaseUseCase {
    refundPurchase: (params: RefundPurchase.Params) => Promise<void>
}

export namespace RefundPurchase {
    export type Params = {
        _id: string
    }
}