import admin from "firebase-admin"
import {connectionFirebaseDB} from "../config/firebase.js"

export default class ProductFirebase{

    async getMany(){
        try {
            const data = await connectionFirebaseDB.collection('product').get()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async createOne(data){
        try {
            await connectionFirebaseDB.collection('product').add(data)
            return {
                res_proccess:true,
                message:'Register successfully'
            }
        } catch (error) {
            console.log(error)
        }
    }

}
