import {instanceConnection} from "../../database/mongo/index.js"
import {productSchema} from "./schemaProduct.js"
import mongoose from "mongoose"

const newSchema=mongoose.model('products',productSchema)

export default class ProductMongo{

    async getMany(){
        try {
            await instanceConnection()
            const products=newSchema.find({})
            
            return products
            mongoose.disconnect()
        } catch (error) {
            console.log(error)
        }
    }

    async getOne(id){
        try {
            await instanceConnection()
            const product = await newSchema.findById({id})
            mongoose.disconnect()
            return product
        } catch (error) {
            
        }
    }

    async createOne(product){
        try {
            await instanceConnection()
            await newSchema.create({...product,timestamp:Date.now()})
            mongoose.disconnect()
        } catch (error) {
            console.log(error)
        }
        
    }

    async deleteOne(id){
        try {
            await instanceConnection()
            await newSchema.deleteOne({"id":id})
            return {
                res_proccess:true,
                message:"register deleted successfully"
            }
        } catch (error) {
            console.log(error)
        }
    }

    async editOne(product,id){
        try {
            newSchema.updateOne({"id":id},{
                $set:{
                    "title":product.title,
                    "price":product.price,
                    "thumbnail":product.thumbnail
                }
            })
        } catch (error) {
            console.log(error)
        }
    }


}