import { Router, Express } from 'express'
import { readdirSync} from 'fs'

export const setupRoutes = (app: Express): void => {
    const router = Router()
    app.use('/api', router)
    readdirSync(`${__dirname}/../routes`).map(async fileName => {
        (await import (`/home/breno/Documents/breno/desafios-backend/criptografia/dist/main/routes/${fileName}`)).default(router)
    })
}