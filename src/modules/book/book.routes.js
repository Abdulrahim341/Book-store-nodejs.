import { Router } from "express";
import * as bookRouter from './book.controller.js'
const router=Router()
router.get('/all',bookRouter.allbooks)
router.get('/:id',bookRouter.book)
router.patch('/:id',bookRouter.updatebook)
router.delete('/:id',bookRouter.deletebook)
router.post('/create',bookRouter.createbook)
export default router