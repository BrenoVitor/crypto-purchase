import { PurchaseEntityImpl, PurchaseStatus } from "../../domain/entities/purchase.entity"
import { CreatePurchaseGateway } from "../../domain/gateway/create-purchase.gateway"
import { CreatePurchase, CreatePurchaseUseCase } from "../../domain/usecases/create-purchase.usecase.interface"
import { EncryptPurchaseUseCase } from "../../domain/usecases/encrypt-purchase.usecase.interface"

export class CreatePurchaseUseCaseImpl implements CreatePurchaseUseCase {

    constructor(private readonly createPurchaseRepository: CreatePurchaseGateway,
        private readonly encryptPurchaseUseCase: EncryptPurchaseUseCase){}

    async createPurchase(params: CreatePurchase.Params): Promise<CreatePurchase.Result> {
        const purchase = new PurchaseEntityImpl(params.userDocument, params.creditCardToken, params.value, PurchaseStatus.CREATED)
        const encrypt = await this.encryptPurchaseUseCase.encryptPurchase({
            userDocument: purchase.getUserDocument(),
            creditCardToken: purchase.getCreditCardToken()
        })
        const result = this.createPurchaseRepository.createPurchase({ userDocument: encrypt.userDocument, creditCardToken: encrypt.creditCardToken,
            value: purchase.value.value, status: purchase.status})
        return result
    }

}