import mongoose from "mongoose"

export const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        max:200
    },
    price:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String
    },
    timestamp:{
        type:Date,
        defaul:Date.now()
    }
})
