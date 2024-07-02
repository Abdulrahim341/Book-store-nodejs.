import bookModel from "../../../models/book.model.js"


// create book
export const createbook=async(req,res,next)=>{
const book=await bookModel.create(req.body)
return res.status(201).json({message:'book added',book})
}

//get all books
export const allbooks=async(req,res,next)=>{
const books=await bookModel.find()
return res.status(201).json({message:'done',books})
}

//GET request to retrieve a single book by its ID.
export const book=async(req,res,next)=>{
const book=await bookModel.findById(req.params.id)
return res.status(201).json({message:'done',book})
}


//PATCH request to update a book by its ID.
export const updatebook=async(req,res,next)=>{
const book=await bookModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
return res.status(201).json({message:'done',book})
}

//DELETE request to delete a book by its ID.    
export const deletebook=async(req,res,next)=>{
const book=await bookModel.findByIdAndDelete(req.params.id)
return res.status(201).json({message:'done',book})
}

