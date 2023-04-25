import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from 'cors'

import userRoutes from "./routes/users.js"
import adminRoutes from "./routes/admin.js"
import podcastRoutes from "./routes/podcast.js"
import authRoutes from "./routes/auth.js"

import cookieParser from "cookie-parser"


const app = express()
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO).then(()=> {
        console.log("Connected to DB")
    }).catch(err => {
        throw err
    })
}


app.use(express.static('image'));
app.use(cookieParser())
app.use(express.json())

app.use(cors());

app.use("/api/users",userRoutes)
app.use("/api/podcasts",podcastRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/auth",authRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Something went wrong!"
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'public/');
//     },
//     filename: (req, file, cb) => {
//       cb(null, `${Date.now()}-${file.originalname}`);
//     }
//   });
  
//   const upload = multer({ storage });
  
//   app.post('/upload', upload.single('file'), (req, res) => {
//     console.log(req.file); // log the contents of req.file object
//     const filePath = path.join('public', req.file.filename);
//     console.log(filePath);
//     res.send('File uploaded successfully');
//   });


app.listen(8800, () => {
    connect()
    console.log("connected")
})