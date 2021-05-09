import { CreatePurchaseUseCaseImpl } from "../../application/interactors/create-purchase.usecase.impl";
import { EncryptPurchaseUseCaseImpl } from "../../application/interactors/encrypt-purchase.usecase.impl";
import { CryptoAdapterImpl } from "../../infra/cryptography/crypto.adapter.impl";
import { CreatePurchaseGatewayImpl } from "../../infra/persisitence/db/create-purchase.gateway.impl";
import { Controller, CreatePurchaseControllerImpl } from "../../presentation/controllers/create-purchase.controller.impl";

export const makeCreatePurchaseController = (): Controller => {
    const cryptoAdapter = new CryptoAdapterImpl()
    const gateway = new CreatePurchaseGatewayImpl()
    const encrypt = new EncryptPurchaseUseCaseImpl(cryptoAdapter)
    const useCase = new CreatePurchaseUseCaseImpl(gateway, encrypt)
    return new CreatePurchaseControllerImpl(useCase)
}