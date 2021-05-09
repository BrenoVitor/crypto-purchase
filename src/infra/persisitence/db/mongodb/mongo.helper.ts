import { MongoClient,Collection } from "mongodb";

export class MongoHelper {

    private static uri:string
    private static client?:MongoClient

    static async getCollection(name: string): Promise<Collection> {
        if(!this.client?.isConnected()){
            await this.connect(this.uri)
        }
        if(!this.client){
            throw new Error()
        }
        return this.client.db().collection(name)
    }

    static async map(data: any): Promise<any> {
        const { _id, ...rest } =  data
        return await { ...rest, _id }
    }

    private static async connect(uri: string): Promise<void> {
        this.uri = uri
        this.client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    private static async disconnect(): Promise<void> {
        await this.client?.close ()
        this.client = undefined
    }

}