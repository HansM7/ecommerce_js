import mongoose from "mongoose"

export const cartSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true,
        max:200
    },
    products:{
        type:Array
    },
    timestamp:{
        type:Date,
        defaul:Date.now()
    }
})