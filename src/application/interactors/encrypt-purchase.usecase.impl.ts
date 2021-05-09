import { CryptoAdapter } from "../../domain/cryptography/crypto.adapter.interface";
import { EncryptPurchase, EncryptPurchaseUseCase } from "../../domain/usecases/encrypt-purchase.usecase.interface";

export class EncryptPurchaseUseCaseImpl implements EncryptPurchaseUseCase {
    constructor(private readonly cryptoAdapter: CryptoAdapter){}

    async encryptPurchase(params: EncryptPurchase.Params): Promise<EncryptPurchase.Result> {
        return {
            userDocument: await this.cryptoAdapter.encrypt(params.userDocument),
            creditCardToken: await this.cryptoAdapter.encrypt(params.creditCardToken),
        }
    }

}