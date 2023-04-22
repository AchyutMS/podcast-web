import { createError } from "../error.js"
import Podcast from "../models/Podcast.js"
import User from "../models/User.js"

export const addPodcast = async (req, res, next ) => {
    const user = await User.findById(req.user.id)
    if(user.role === 'admin') {
        const newPodcast = new Podcast({...req.body})
        try {
            const savedPodcast = await newPodcast.save()
            res.status(200).json(savedPodcast)
        } catch (err) {
            next(err)
        }
    } else {
        return next(createError(404,"User is not an Admin"))
    }

}

export const updatePodcast = async (req, res, next ) => {
    const user = await User.findById(req.user.id)
    if(user.role === 'admin') {
        try {
            const podcast = await Podcast.findById(req.params.id)
            if(!podcast) return next(createError(404, "Podcast not found"))
    
            const updatedPodcast = await Podcast.findByIdAndUpdate(req.params.id, 
                {
                    $set:req.body,
                },
                {
                    new: true
                }
            )
            res.status(200).json(updatedPodcast)
        } catch (err) {
            next(err)
        }
    } else {
        return next(createError(404,"User is not an Admin"))
    }
}

export const deletePodcast = async (req, res, next ) => {
    const user = await User.findById(req.user.id)
    if(user.role === 'admin') {
        try {
            const podcast = await Podcast.findById(req.params.id)
            if(!podcast) return next(createError(404, "Podcast not found"))
    
            await Podcast.findByIdAndDelete(
                req.body.id,
            )
            res.status(200).json("Podcast Deleted Successfully")
        } catch (err) {
            next(err)
        }
    } else {
        return next(createError(404,"User is not an Admin"))
    }
}