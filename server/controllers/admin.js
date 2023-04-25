import { createError } from "../error.js"
import Podcast from "../models/Podcast.js"
import User from "../models/User.js"

import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'image/audio');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  // Init upload
  const upload = multer({ storage: storage });

  export const addPodcast = (req, res) => {
    // Handle file upload
    upload.single('file')(req, res, async (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('An error occurred while uploading the file');
        } else {
          console.log(req.file);
          req.body.imgUrl = 'podcast-default-logo.jpg'
          req.body.podcastUrl = req.file.filename
          // Log other form data received
          console.log('Body Data:', req.body);
        const newPodcast = new Podcast({...req.body})
        try {
            console.log('okokoko')
            const savedPodcast = await newPodcast.save()
            // res.status(200).json("Podcast Saved Successfully")
        } catch (err) {
            next(err)
        }
          res.send('File uploaded successfully');
        }
      });
    
  };
  


// export const addPodcast = async (req, res, next ) => {
//     const user = await User.findById(req.user.id)
//     if(user.role === 'admin') {
//         upload.single('file')
//         console.log(req.file); // log the contents of req.file object
//     console.log('body',req.body)
//     const filePath = path.join('public', req.file.filename);
//     console.log(filePath);
//     res.send('File uploaded successfully');
//         const newPodcast = new Podcast({...req.body})
//         try {
//             const savedPodcast = await newPodcast.save()
//             res.status(200).json(savedPodcast)
//         } catch (err) {
//             next(err)
//         }
//     } else {
//         return next(createError(404,"User is not an Admin"))
//     }
// }

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
    // const user = await User.findById(req.user.id)
    // if(user.role === 'admin') {
        try {
            console.log('hi')
            const podcast = await Podcast.findById(req.params.id)
            if(!podcast) return next(createError(404, "Podcast not found"))
    
            await Podcast.findByIdAndDelete(
                req.params.id,
            )
            res.status(200).json("Podcast Deleted Successfully")
        } catch (err) {
            next(err)
        }
    // } else {
    //     return next(createError(404,"User is not an Admin"))
    // }
}