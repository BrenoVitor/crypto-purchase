import { Router } from "express"
import { adaptRoute } from "../adapters/express-routes.adapter"
import { makeCancelPurchaseController } from "../factories/make-cancel-purchase-controller.factory"
import { makeCreatePurchaseController } from "../factories/make-create-purchase-controller.factory"
import { makeProcessPurchaseController } from "../factories/make-process-purchase-controller.factory"
import { makeRefundPurchaseController } from "../factories/make-refund-purchase-controller.factory"

export default (router: Router): void => {
    router.post('/purchases', adaptRoute(makeCreatePurchaseController()))
    router.delete('/purchases/:_id/cancel', adaptRoute(makeCancelPurchaseController()))
    router.patch('/purchases/:_id/process', adaptRoute(makeProcessPurchaseController()))
    router.patch('/purchase/:_id/refund', adaptRoute(makeRefundPurchaseController()))
    router.get('purchases/:_id', adaptRoute)
}