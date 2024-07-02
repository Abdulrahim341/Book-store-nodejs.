import authorModel from "../../../models/author.model.js"


// POST request to create a new author.
export const createauthor=async(req,res,next)=>{
// const{name,email,password}=req.body
const author=await authorModel.create(req.body)
return res.status(201).json({message:'author added',author})
}

//GET request to retrieve all authors.
export const allauthors=async(req,res,next)=>{
const authors=await authorModel.find()
return res.status(201).json({message:'done',authors})
}

//GET request to retrieve a single author by its ID.
export const author=async(req,res,next)=>{
const author=await authorModel.findById(req.params.id)
return res.status(201).json({message:'done',author})
}

//PATCH request to update an author by its ID.
export const updateauthor=async(req,res,next)=>{
const author=await authorModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
return res.status(201).json({message:'done',author})
}

//DELETE request to delete an author by its ID.
export const deleteauthor=async(req,res,next)=>{
const author=await authorModel.findByIdAndDelete(req.params.id)
return res.status(201).json({message:'done',author})
}

//Add a relationship so that when retrieving an author, the response includes a list of books written by them.
export const allauthorswithbooks=async(req,res,next)=>{
const author=await authorModel.findById(req.params.Id).populate('books').exec('books')
return res.status(201).json({message:'done',author})
}
