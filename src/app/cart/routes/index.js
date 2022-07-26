import express from "express"
import { addProductToCartController, deleteProductOfCartController, getManyController } from "../controllers/index.js"

const router = express.Router()

router.get('/api/cart',getManyController )

router.post('/api/cart/product/:id', addProductToCartController)

router.delete('/api/cart/product/:id', deleteProductOfCartController)


export default router