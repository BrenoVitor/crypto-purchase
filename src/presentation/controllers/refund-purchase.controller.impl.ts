import { RefundPurchaseUseCase } from "../../domain/usecases/refund-purchase.usecase.interface";
import { noContent } from "./cancel-purchase.controller.impl";
import { Controller, HttpRequest, HttpResponse } from "./create-purchase.controller.impl";

export type RefundPurchaseRequestDto = {
    _id: string
}

export class RefundPurchaseControllerImpl implements Controller {
    constructor(private readonly refundPurchaseUseCase: RefundPurchaseUseCase){}
    async handle(request: HttpRequest<any>): Promise<HttpResponse>{
        const _id = request.params._id
        await this.refundPurchaseUseCase.refundPurchase({ _id })
        return noContent()
    }

}