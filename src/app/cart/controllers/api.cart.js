import CartFirebase from "../../../DAO/firebase/cartFirebase.dao.js"

const modelCart = new CartFirebase()

export const getManyController = async(_req,res)=>{
    const data = await modelCart.getMany()
    res.json(data)
}

export const getOneController = async(req,res)=>{
    const id = req.params.id
    const data = await modelCart.getOne(id)
    res.json(data)
}

export const createOneController = async (req,res)=>{
    const data = req.body
    const register = await modelCart.createOne(data)
    res.json(register)
}

export const editOneController = async (req,res)=>{
    const id = req.params.id
    const data = req.body
    const edited = await modelCart.editOne(data,id)
    res.json(edited)
}

export const deleteOneController = async (req,res)=>{
    const id = req.params.id
    const deleted = await modelCart.deleteOne(id)
    res.json(deleted)
}

export const addProductToCartController = async(req,res)=>{
    const idProduct = req.body.id
    const idCart = req.params.id

    const register = await modelCart.addProductToCart(idProduct,idCart)
    res.json(register)
}

export const deleteProductOfCartController = async(req,res)=>{
    const idProduct = req.body.id
    const idCart = req.params.id

    const deleted = await modelCart.deleteProductOfCart(idProduct,idCart)
    res.json(deleted)
}

