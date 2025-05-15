import express from 'express'
import { getUser,register } from '../controllers/user.controller.js'

const router = express.Router()

router.get('/profile',getUser)
router.post('/register/:id',register)


export default router