import express from "express"
import { forgotPassword, login, register, resetPassword } from "../controllers/auth"


const router = express.Router()




router.post('/register', register)
router.post('/login', login)
router.post('/forgetpassword', forgotPassword)
router.post('/resetpassword/:restToken', resetPassword)




module.exports = router

