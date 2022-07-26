import ProductFirebase from "../../../DAO/firebase/productFirebase.dao.js"
import ProductMongo from "../../model/productMongo.js"

const modelProduct = new ProductFirebase()
const modelProductMongo = new ProductMongo()

export const getManyController = async(_req,res)=>{
    const data = await modelProduct.getMany()
    res.json(data)
}

export const getOneController = async(req,res)=>{
    const id = req.params.id
    const data = await modelProduct.getOne(id)
    res.json(data)
}

export const createOneController = async (req,res)=>{
    const data = req.body
    const register = await modelProduct.createOne(data)
    res.json(register)
}

export const editOneController = async (req,res)=>{
    const id = req.params.id
    const data = req.body
    const edited = await modelProduct.editOne(data,id)
    res.json(edited)
}

export const deleteOneController = async (req,res)=>{
    const id = req.params.id
    const deleted = await modelProduct.deleteOne(id)
    res.json(deleted)
}
