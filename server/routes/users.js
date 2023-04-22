import express from "express"
import { getUser, subscribe, unsubscribe } from "../controllers/user.js"
import { verifyToken } from "../verifyToken.js"

const router = express.Router()


//GET A USER
router.get("/find/:id", getUser)

//ADD AS FAVOURITE PODCAST
router.put("/sub/:podcastId", verifyToken, subscribe)

//REMOVE FROM FAVOURITE PODCAST
router.put("/unsub/:podcastId", verifyToken,  unsubscribe)

export default router;