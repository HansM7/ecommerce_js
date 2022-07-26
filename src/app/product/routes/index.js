import express from "express"
import { getManyController,createOneController, getOneController, editOneController, deleteOneController, createOneMongoController, getManyMongoController, getOneMongoController } from "../controllers/index.js"

const router = express.Router()

router.get('/api/producto',getManyController )

router.get('/api/producto/:id',getOneController )

// router.get('/productos/:id', getOne)

router.post('/api/producto', createOneController)

router.put('/api/producto/:id', editOneController)

router.delete('/api/producto/:id', deleteOneController)


export default router