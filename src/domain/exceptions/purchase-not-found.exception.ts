export class PurchaseNotFoundException extends Error {

    constructor(purchaseId: string){
        super(`Purchase: ${purchaseId} not found`)
        this.name = 'PurchaseNotFoundException'
    }
}