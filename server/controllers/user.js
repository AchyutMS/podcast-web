import { createError } from "../error.js"
import User from "../models/User.js"


export const getUser = async (req, res, next) => {
   try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
   } catch (err) {
        next(err)
   } 
}

export const subscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $push: {favourites: req.params.podcastId}
        })

        res.status(200).json("Podcast Added to Favourites")

   } catch (err) {
        next(err)
   } 
}

export const unsubscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull: {favourites: req.params.podcastId}
        })

        res.status(200).json("Podcast Removed from Favourites")

   } catch (err) {
        next(err)
   } 
}
