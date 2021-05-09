import { PurchaseStatus } from "../../domain/entities/purchase.entity"
import { FindPurchaseByIdGateway } from "../../domain/gateway/find-purchase-by-id.gateway.interface"
import { UpdatePurchaseGateway } from "../../domain/gateway/upate-purchase.gateway.interface"
import { DecryptPurchaseUseCase } from "../../domain/usecases/decrypt-purchase.usecase.interface"
import { RefundPurchase, RefundPurchaseUseCase } from "../../domain/usecases/refund-purchase.usecase.interface"
import { UpdateStatusPurchaseUseCase } from "./update-purchase-status.usecase.abstract"

export class RefundPurchaseUseCaseImpl extends UpdateStatusPurchaseUseCase implements RefundPurchaseUseCase {
    
    constructor(updatePurchaseGateway: UpdatePurchaseGateway, findPurchaseByIdGateway: FindPurchaseByIdGateway, decryptPurchase: DecryptPurchaseUseCase){
        super(updatePurchaseGateway, findPurchaseByIdGateway, decryptPurchase)
    }

    async refundPurchase(params: RefundPurchase.Params): Promise<void>{
        this.updatePurchaseStatus(params, PurchaseStatus.REFUNDED)
    }

}