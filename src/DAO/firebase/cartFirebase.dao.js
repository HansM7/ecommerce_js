import admin from "firebase-admin"
import {connectionFirebaseDB} from "../config/firebase.js"

export default class CartFirebase{

    constructor(){
        this.instanceCart=connectionFirebaseDB.collection('cart')
        this.instanceProduct=connectionFirebaseDB.collection('product')
    }

    async getMany(){
        try {
            const products = await this.instanceCart.get()
            return products.docs
        } catch (error) {
            console.log(error)
        }
    }

    async getOne(id){
        try {
            const product = await this.instanceCart.doc(id).get()
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
            await this.instanceCart.doc(id).update(data)
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
            await this.instanceCart.doc(id).delete()
            return {
                res_proccess:true,
                message:'delete register successfully'
            }
        } catch (error) {
            console.log(error)
        }
    }

    async addProductToCart(idProduct,idCart){
        try {
            const cart = await this.instanceCart.doc(idCart).get()
            const product = await this.instanceProduct.doc(idCart).get()
            await this.instanceCart.doc(idCart).update({products:admin.firestore.FieldValue.arrayUnion(idProduct)})
            return {
                message:"ok"
            }
        } catch (error) {
            console.log(error)
        }
    }

    async deleteProductOfCart(idCart,idProduct){
        const cart = await this.instanceCart.doc(idCart).get()
        const product = await this.instanceProduct.doc(idProduct).get()

        await this.instanceCart.doc(idCart).update({products : admin.firestore.FieldValue.arrayRemove(idProduct)})

        return{
            message : "ok"
        }
    }

}
