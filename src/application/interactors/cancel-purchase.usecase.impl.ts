import { PurchaseStatus } from "../../domain/entities/purchase.entity";
import { FindPurchaseByIdGateway } from "../../domain/gateway/find-purchase-by-id.gateway.interface";
import { UpdatePurchaseGateway } from "../../domain/gateway/upate-purchase.gateway.interface";
import { CancelPurchase, CancelPurchaseUseCase } from "../../domain/usecases/cancel-purchase.usecase.interface";
import { DecryptPurchaseUseCase } from "../../domain/usecases/decrypt-purchase.usecase.interface";
import { UpdateStatusPurchaseUseCase } from "./update-purchase-status.usecase.abstract";

export class CancelPurchaseUsecaseImpl extends UpdateStatusPurchaseUseCase implements CancelPurchaseUseCase {

    constructor(updatePurchaseGateway: UpdatePurchaseGateway, findPurchaseByIdGateway: FindPurchaseByIdGateway, decryptPurchaseUseCase: DecryptPurchaseUseCase){
        super(updatePurchaseGateway, findPurchaseByIdGateway, decryptPurchaseUseCase)
    }

    async cancelPurchase(params: CancelPurchase.Params): Promise<void>{
        this.updatePurchaseStatus(params, PurchaseStatus.CANCELED)
    }
   
}