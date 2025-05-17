import express from "express";
import {signup, login , logout} from "../controllers/auth.controller.js"
const router = express.Router();
import {protectAuth} from "../middlewares/protectAuth.js"


router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout)

router.get('/verify', protectAuth,(req, res) => {
    res.status(200).send({ message: "User logged in successfully", user: req.user });
})

export default router