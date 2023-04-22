import mongoose from "mongoose"

const PodcastSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    imgUrl:{
        type: String,
        required: true,
    },
    podcastUrl:{
        type: String,
        required: true,
    },
    podcastType: {
        type: String,
        required: true
    },
}, {timestamps: true}
);



export default mongoose.model("Podcast", PodcastSchema);