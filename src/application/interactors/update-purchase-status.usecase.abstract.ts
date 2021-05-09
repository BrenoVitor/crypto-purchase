import { PurchaseStatus } from "../../domain/entities/purchase.entity"
import { PurchaseNotFoundException } from "../../domain/exceptions/purchase-not-found.exception"
import { FindPurchaseByIdGateway } from "../../domain/gateway/find-purchase-by-id.gateway.interface"
import { UpdatePurchaseGateway } from "../../domain/gateway/upate-purchase.gateway.interface"
import { DecryptPurchaseUseCase } from "../../domain/usecases/decrypt-purchase.usecase.interface"
import { RefundPurchase } from "../../domain/usecases/refund-purchase.usecase.interface"

export abstract class UpdateStatusPurchaseUseCase {

    constructor(private readonly updatePurchaseGateway: UpdatePurchaseGateway,
        private readonly findPurchaseByIdGateway: FindPurchaseByIdGateway, private readonly decryptPurchaseUseCase: DecryptPurchaseUseCase){}
        
    async updatePurchaseStatus(params: RefundPurchase.Params, purchaseStatus: PurchaseStatus): Promise<void>{

        const purchase = await this.findPurchaseByIdGateway.findPurchaseById(params)
        if(!purchase){
            throw new PurchaseNotFoundException(params._id)
        }
        this.decryptPurchaseUseCase.decryptPurchase({
            userDocument: purchase.userDodument,
            creditCardToken: purchase.creditCardToken
        })
        await this.updatePurchaseGateway.updatePurchase({ _id: params._id, status: purchaseStatus })
    }
}