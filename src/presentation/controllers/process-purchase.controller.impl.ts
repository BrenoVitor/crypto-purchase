import { ProcessPurchaseUseCase } from "../../domain/usecases/process-purchase.usecase.interface";
import { noContent } from "./cancel-purchase.controller.impl";
import { Controller, HttpRequest, HttpResponse } from "./create-purchase.controller.impl";

export type ProcessPurchaseRequestDto = {
    _id: string
}

export class ProcessPurchaseControllerImpl implements Controller {
    constructor(private readonly processPurchaseUseCase: ProcessPurchaseUseCase){}
    async handle(request: HttpRequest<ProcessPurchaseRequestDto>): Promise<HttpResponse> {
        const _id = request.params._id
        await this.processPurchaseUseCase.processPurchase({ _id })
        return noContent()
    }

}