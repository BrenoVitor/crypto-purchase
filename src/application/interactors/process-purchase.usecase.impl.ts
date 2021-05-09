import { PurchaseStatus } from "../../domain/entities/purchase.entity"
import { FindPurchaseByIdGateway } from "../../domain/gateway/find-purchase-by-id.gateway.interface"
import { UpdatePurchaseGateway } from "../../domain/gateway/upate-purchase.gateway.interface"
import { DecryptPurchaseUseCase } from "../../domain/usecases/decrypt-purchase.usecase.interface"
import { ProcessPurchase, ProcessPurchaseUseCase } from "../../domain/usecases/process-purchase.usecase.interface"
import { UpdateStatusPurchaseUseCase } from "./update-purchase-status.usecase.abstract"

export class ProcessPurchaseUseCaseImpl extends UpdateStatusPurchaseUseCase implements ProcessPurchaseUseCase {

    constructor(updatePurchaseGateway: UpdatePurchaseGateway, findPurchaseByIdGateway: FindPurchaseByIdGateway, decryptPurchase: DecryptPurchaseUseCase){
        super(updatePurchaseGateway, findPurchaseByIdGateway, decryptPurchase)
    }

    async processPurchase(params: ProcessPurchase.Params): Promise<void>{
        this.updatePurchaseStatus(params, PurchaseStatus.PROCESSED)
    }

}