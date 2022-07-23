import ProductFirebase from "../../../DAO/firebase/index.js"
const modelProduct = new ProductFirebase()

export const getManyController = async(_req,res)=>{
    const data = await modelProduct.getMany()
    res.json(data)
}