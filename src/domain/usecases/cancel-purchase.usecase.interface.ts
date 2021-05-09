export interface CancelPurchaseUseCase {

    cancelPurchase: (params: CancelPurchase.Params) => Promise<void>

}

export namespace CancelPurchase {
    export type Params = {
        _id: string
    }
}