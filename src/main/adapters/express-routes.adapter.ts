import { Controller } from "@/presentation/controllers/create-purchase.controller.impl";

import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const response = await controller.handle({body: req.body, params: req.params})
        res.status(response.statusCode).json(response.data)
    }
}