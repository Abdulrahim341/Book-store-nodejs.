import mongoose from "mongoose";


const dbconnection=mongoose.connect('mongodb://localhost:27017/mongooseAss').then(()=>{
    console.log('DB connected');
}).catch(()=>{
    console.log('DB failure to connect');
})
export default dbconnection