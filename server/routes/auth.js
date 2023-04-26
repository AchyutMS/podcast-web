import express from "express"
import { signup, signin } from "../controllers/auth.js"
import { verifyAuth } from "../verifyToken.js"
import { verify } from "jsonwebtoken"

const router = express.Router()

//GET A USER
router.post("/verify", verifyAuth, verify)

//CREATE A USER
router.post("/signup", signup)

//SIGN IN
router.post("/signin", signin)

//GOOGLE AUTH
router.post("/google",)

export default router;