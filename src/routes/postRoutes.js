import express from 'express'
import { topPostHandler } from '../controllers'

const router = express.Router()

router.get('/top_posts', topPostHandler)

export default router