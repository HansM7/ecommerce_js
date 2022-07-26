import instanceConnection from "../../database/mongo/index.js"
import cartSchema from "../model/schemaCart"
import mongoose from "mongoose"

const newSchema=mongoose.model('cart',cartSchema)

export class ProductMongo{

    async getMany(){
        try {
            await instanceConnection()
            const products=newSchema.find({})
            mongoose.disconnect()
            return products
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
            console.log(error)
        }
    }

    async createOne(data){
        try {
            await instanceConnection()
            await newSchema.create({...data,timestamp:Date.now()})
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



}