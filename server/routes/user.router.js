import express from 'express'
import { getUser,registerEvent } from '../controllers/user.controller.js'

const router = express.Router()

router.get('/profile',getUser)
router.post('/register/:id',registerEvent)


export default router