export interface ProcessPurchaseUseCase {
    processPurchase: (params: ProcessPurchase.Params) => Promise<void>
}

export namespace ProcessPurchase {
    export type Params = {
        _id: string,
    }
}