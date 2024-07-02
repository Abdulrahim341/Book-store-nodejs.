import { Schema, Types, model } from "mongoose";
import { type } from "os";
import { types } from "util";


const schema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publishedDate:{
        type:Date,
        default:Date.now
    }
},{
    versionKey:false
})
const bookModel =model('Book',schema)
export default bookModel