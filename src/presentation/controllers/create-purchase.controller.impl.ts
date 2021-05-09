import { CreatePurchaseUseCase } from "../../domain/usecases/create-purchase.usecase.interface";

export type HttpResponse<T = any> = {
    statusCode: number,
    data?: T
}

export type HttpRequest<T = any> = {
    body: T,
    params: any
}

export type CreatePurchaseRequestDto = {
    userDocument: string,
    creditCardToken: string,
    value: number
}
export interface Controller {
    handle: (request: HttpRequest) => Promise<HttpResponse>
}

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    data: error.stack
  })
  
export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    data
  })

export class CreatePurchaseControllerImpl implements Controller {
    constructor(private readonly createPurchaseUseCase: CreatePurchaseUseCase){}
    
    async handle(request: HttpRequest<CreatePurchaseRequestDto>): Promise<HttpResponse<string>>{
        const body = request.body
        const result = await this.createPurchaseUseCase.createPurchase({
            userDocument: body.userDocument,
            creditCardToken: body.creditCardToken,
            value: body.value
        })
        return ok(result._id)
    }

}