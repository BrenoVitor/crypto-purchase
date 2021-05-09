import { DecryptPurchaseUseCaseImpl } from "../../application/interactors/decrypt-purchase.usecase.impl";
import { RefundPurchaseUseCaseImpl } from "../../application/interactors/refund-purchase.usecase.impl";
import { CryptoAdapterImpl } from "../../infra/cryptography/crypto.adapter.impl";
import { FindPurchaseByIdGatewayImpl } from "../../infra/persisitence/db/find-purchase-by-id.gateway.impl";
import { UpdatePurchaseGatewayImpl } from "../../infra/persisitence/db/update-purchase.gateway.impl";
import { RefundPurchaseControllerImpl } from "../../presentation/controllers/refund-purchase.controller.impl";

export const makeRefundPurchaseController = (): RefundPurchaseControllerImpl => {
    const cryptoAdapter = new CryptoAdapterImpl()
    const findGateway = new FindPurchaseByIdGatewayImpl()
    const updateGateway = new UpdatePurchaseGatewayImpl()
    const decrypt = new DecryptPurchaseUseCaseImpl(cryptoAdapter)
    const useCase = new RefundPurchaseUseCaseImpl(updateGateway, findGateway, decrypt)
    return new RefundPurchaseControllerImpl(useCase)
}