import { CancelPurchaseUsecaseImpl } from "../../application/interactors/cancel-purchase.usecase.impl";
import { DecryptPurchaseUseCaseImpl } from "../../application/interactors/decrypt-purchase.usecase.impl";
import { CryptoAdapterImpl } from "../../infra/cryptography/crypto.adapter.impl";
import { FindPurchaseByIdGatewayImpl } from "../../infra/persisitence/db/find-purchase-by-id.gateway.impl";
import { UpdatePurchaseGatewayImpl } from "../../infra/persisitence/db/update-purchase.gateway.impl";
import { CancelPurchaseControllerImpl } from "../../presentation/controllers/cancel-purchase.controller.impl";

export const makeCancelPurchaseController = (): CancelPurchaseControllerImpl => {
    const cryptoAdapter = new CryptoAdapterImpl()
    const updateGateway = new UpdatePurchaseGatewayImpl();
    const findGateway = new FindPurchaseByIdGatewayImpl();
    const decrypt = new DecryptPurchaseUseCaseImpl(cryptoAdapter);
    const useCase = new CancelPurchaseUsecaseImpl(updateGateway, findGateway, decrypt)
    return new CancelPurchaseControllerImpl(useCase)

}