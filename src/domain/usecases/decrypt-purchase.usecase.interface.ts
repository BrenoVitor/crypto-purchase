export interface DecryptPurchaseUseCase {

    decryptPurchase: (params: DecryptPurchase.Params) => Promise<DecryptPurchase.Result>

}

export namespace DecryptPurchase {
    export type Params = {
        userDocument: string,
        creditCardToken: string
    }

    export type Result = {
        userDocument: string,
        creditCardToken: string
    }
}