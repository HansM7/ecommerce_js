import admin from "firebase-admin"
import {connectionFirebaseDB} from "../config/firebase.js"

export default class ProductFirebase{

    constructor(){
        this.instanceProduct=connectionFirebaseDB.collection('product')
    }

    async getMany(){
        try {
            const products = await this.instanceProduct.get()
            return products.docs
        } catch (error) {
            console.log(error)
        }
    }

    async getOne(id){
        try {
            const product = await this.instanceProduct.doc(id).get()
            return product.data()
        } catch (error) {
            console.log(error)
        }
    }

    async createOne(data){
        try {
            await connectionFirebaseDB.collection('product').add({...data,timestamp:Date.now()})
            return {
                res_proccess:true,
                message:'Register successfully'
            }
        } catch (error) {
            console.log(error)
        }
    }

    async editOne(data,id){
        try {
            await this.instanceProduct.doc(id).update(data)
            return {
                res_proccess:true,
                message:"register modify successfully"
            }
        } catch (error) {
            console.log(error)
        }
    }

    async deleteOne(id){
        try {
            await this.instanceProduct.doc(id).delete()
            return {
                res_proccess:true,
                message:'delete register successfully'
            }
        } catch (error) {
            console.log(error)
        }
    }

}
