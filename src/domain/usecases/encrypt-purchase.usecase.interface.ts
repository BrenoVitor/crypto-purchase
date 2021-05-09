export interface EncryptPurchaseUseCase {
    encryptPurchase: (params: EncryptPurchase.Params) => Promise<EncryptPurchase.Result>
}

export namespace EncryptPurchase {
    export type Params = {
        userDocument: string,
        creditCardToken: string
    }

    export type Result = {
        userDocument: string,
        creditCardToken: string
    }
}