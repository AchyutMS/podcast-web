import Podcast from "../models/Podcast.js"
import User from "../models/User.js"


export const getPodcast = async (req, res, next ) => {
    try {
        const podcast = await Podcast.findById(req.params.id)
        res.status(200).json(podcast)
    } catch (err) {
        next(err)
    }
}


export const random = async (req, res, next ) => {
    try {
        const podcasts = await Podcast.aggregate([{$sample:{size:40}}])
        res.status(200).json(podcasts)
    } catch (err) {
        next(err)
    }
}


export const favourites = async (req, res, next ) => {

    try {
        const user = await User.findById(req.user.id)
        const favouritePodcasts = user.favourites;

        const list = await Promise.all(
            favouritePodcasts.map(podcastId => {
                return Podcast.findById(podcastId)
            })
        )
        res.status(200).json(list.flat().sort((a,b) => b.createdAt - a.createdAt))
    } catch (err) {
        next(err)
    }
}


export const search = async (req, res, next ) => {
    const query = req.query.q
    try {
        const podcasts = await Podcast.find({title: { $regex: query, $options:"i"}}).limit(40)
        res.status(200).json(podcasts)
    } catch (err) {
        next(err)
    }
}