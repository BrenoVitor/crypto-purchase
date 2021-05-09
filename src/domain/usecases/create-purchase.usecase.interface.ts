export interface CreatePurchaseUseCase {

    createPurchase: (params: CreatePurchase.Params) => Promise<CreatePurchase.Result>

}

export namespace CreatePurchase {
    export type Params = {
        userDocument: string,
        creditCardToken: string,
        value: number
    }

    export type Result = {
        _id: string
    }
}