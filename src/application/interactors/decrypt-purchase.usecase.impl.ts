import { CryptoAdapter } from "../../domain/cryptography/crypto.adapter.interface";
import { DecryptPurchase, DecryptPurchaseUseCase } from "../../domain/usecases/decrypt-purchase.usecase.interface";

export class DecryptPurchaseUseCaseImpl implements DecryptPurchaseUseCase {
    constructor(private readonly cryptoAdapter: CryptoAdapter){}

    async decryptPurchase(params: DecryptPurchase.Params): Promise<DecryptPurchase.Result> {
        return {
            userDocument: await this.cryptoAdapter.decrypt(params.userDocument),
            creditCardToken: await this.cryptoAdapter.decrypt(params.creditCardToken)
        }
    }

}