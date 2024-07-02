import dbconnection from "../database/connection.js"
import authorRouter from './modules/author/author.routes.js'
import bookRouter from './modules/book/book.routes.js'



const bootstrab =(app,express)=>{
    
    app.use(express.json())
    app.use('/book',bookRouter)
    app.use('/author',authorRouter)
    app.use('*',(_,res)=>{
        return res.json({message:'not found'})
    })
}
export default bootstrab
