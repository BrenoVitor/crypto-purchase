import { FindPurchaseById, FindPurchaseByIdGateway } from "../../../domain/gateway/find-purchase-by-id.gateway.interface";
import { MongoHelper } from "./mongodb/mongo.helper";

export class FindPurchaseByIdGatewayImpl implements FindPurchaseByIdGateway {
    
    async findPurchaseById(params: FindPurchaseById.Params): Promise<FindPurchaseById.Result> {
        const purchaseCollection = await MongoHelper.getCollection('purchases')
        const result = await purchaseCollection?.findOne({ _id: params._id })
        return result
    }

}