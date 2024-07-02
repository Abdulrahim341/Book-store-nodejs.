
import express from 'express'
// import dbconnection from "./database/connection.js";
import userModel from "./models/author.model.js";
import bootstrab from "./src/bootstrab.js";
import cors from 'cors'

const app = express()
const port = process.env.port||3000
bootstrab(app,express)
app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))