export abstract class PurchaseInvalidFieldException extends Error {

    constructor(field: string, name: string, msg?: string){
        super(`Purchase field ${field} invalid${ msg ? `, ${msg}` : '' } `)
        this.name = name
    }

}