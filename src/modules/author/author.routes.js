import { Router } from "express";
import * as authorRouter from './author.controller.js'
const router= Router()
router.get('/:id',authorRouter.author)
router.get('/all',authorRouter.allauthors)
router.get('/',authorRouter.allauthorswithbooks)
router.post('/create',authorRouter.createauthor)
router.patch('/:id',authorRouter.updateauthor)
router.delete('/:id',authorRouter.deleteauthor)



export default router