import express from "express"
// import { getManyController } from "../controllers/index.js"
import ProductFirebase from "../../../DAO/firebase/productFirebase.dao.js"

const modelProduct = new ProductFirebase()
const router = express.Router()

router.get('/api/productos', async (req, res) => {
    const data = await modelProduct.getMany()
    res.json(data)
})

// router.get('/productos/:id', getOne)

// router.post('/productos/', createOne)

// router.put('/productos/:id', editOne)

// router.delete('/productos/:id', deleteOne)

export default router