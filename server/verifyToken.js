import jwt from "jsonwebtoken"

import { createError } from "./error.js"

export const verifyToken = (req, res, next) => {
    console.log(req.header)
    const token = req.header
    console.log(token)
    if(!token) return next(createError(404,"User not Authenticated"))

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) return next(createError(403,"Invalid Token"))

        req.user = user
        next()
    })
}

export const VerifyAdmin = (req, res, next) => {
    const token = req.cookies.access_token
    if(!token) return next(createError(404,"User not Authenticated"))

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) return next(createError(403,"Invalid Token"))
        req.user = user
        console.log(req.user)
        if(req.user.role === 'admin'){
            req.user = user
            next()
        } else {
            return next(createError(404,"User is not an Admin"))
        }
        
    })
}