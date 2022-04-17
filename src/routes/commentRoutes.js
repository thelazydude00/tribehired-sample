import express from 'express'
import { getCommentHandler } from '../controllers'

const router = express.Router()

router.get('/comments', getCommentHandler)

export default router