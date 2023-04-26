import express from "express"
import { getPodcast, random, favourites, search } from "../controllers/podcast.js"
import { verifyToken } from "../verifyToken.js";

const router = express.Router()


//ADD SUBSCRIPTION TO CHANNEL
router.post("/favourites", verifyToken, favourites)

//GET RANDOM VIDEOS LIST
router.get("/random", random)

//GET PODCAST LIST BY SEARCH
router.get("/search", search)

//GET PODCAST BY ID
router.get("/:id", getPodcast)




export default router;