import { UpdatePurchase, UpdatePurchaseGateway } from "../../../domain/gateway/upate-purchase.gateway.interface"
import { MongoHelper } from "./mongodb/mongo.helper"

export class UpdatePurchaseGatewayImpl implements UpdatePurchaseGateway {
    
    async updatePurchase(params: UpdatePurchase.Params): Promise<void>{
        const purchaseCollection = await MongoHelper.getCollection('purchase')
        purchaseCollection?.updateOne({
            _id: params._id
        }, {
        $set: {
            status: params.status
        }
    })
    }

}