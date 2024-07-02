import {  mongoose, Schema, model, Types } from "mongoose";
const schema = new Schema({
    name:{
    type:String,
    required:true,
    trim:true
    },
    bio:String,
    birthDate:Date,
    books:[
        {
            type:Types.ObjectId,
            ref:'book'
        }
    ]
})

const authorModel= model('Author',schema)



export default authorModel