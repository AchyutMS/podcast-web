import express from "express"
import { addPodcast, updatePodcast, deletePodcast } from "../controllers/admin.js"
import { verifyToken } from "../verifyToken.js"

const router = express.Router()


//CREATE A PODCAST
router.post("/", verifyToken, addPodcast)

//UPDATE PODCAST
router.put("/:id", verifyToken, updatePodcast)

//DELETE PODCAST
router.delete("/:id", verifyToken, deletePodcast)


export default router;