import { CryptoAdapter } from "../../../domain/cryptography/crypto.adapter.interface";
import { CreatePurchase, CreatePurchaseGateway } from "../../../domain/gateway/create-purchase.gateway";
import { MongoHelper } from "./mongodb/mongo.helper";

export class CreatePurchaseGatewayImpl implements CreatePurchaseGateway {

    async createPurchase(params: CreatePurchase.Params): Promise<CreatePurchase.Result> {
        const purchaseCollection = await MongoHelper.getCollection('purchases')
        const result = await purchaseCollection.insertOne(params)
        return result.insertedId
    }

}