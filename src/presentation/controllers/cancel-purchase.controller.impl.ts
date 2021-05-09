import { CancelPurchaseUseCase } from "../../domain/usecases/cancel-purchase.usecase.interface";
import { Controller, HttpRequest, HttpResponse } from "./create-purchase.controller.impl";

export type CancelPurchaseRequestDto = {
    _id: string
}

export const noContent = ():HttpResponse => ({
    statusCode: 204
})

export class CancelPurchaseControllerImpl implements Controller {
    constructor(private readonly cancelPurchaseUseCase: CancelPurchaseUseCase){}

    async handle(request: HttpRequest<CancelPurchaseRequestDto>): Promise<HttpResponse> {
        const _id = request.params._id
        this.cancelPurchaseUseCase.cancelPurchase({ _id })
        return noContent()
    }

}