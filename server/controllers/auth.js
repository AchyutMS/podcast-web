import mongoose from "mongoose"
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import { createError } from "../error.js";

export const signup = async (req, res, next) => {
    console.log("Signup",req.body)
    try {
        var salt = bcrypt.genSaltSync(10)
        req.body.password = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User(req.body)

        await newUser.save()
        res.status(200).send("User has been created")
    } catch(err) {
        next(err)
    }
};

export const signin = async (req, res, next) => {
    console.log("signin");
    try {
        const user = await User.findOne({name:req.body.name})
        if(!user) return next(createError(404,"User Not Found!"))

        const isCorrect = await bcrypt.compare(req.body.password, user.password)

        if(!isCorrect) return next(createError(400,"Invalid Credentials!"))

        const token = jwt.sign({id: user._id}, process.env.JWT)
        const {password, ...others} = user._doc
        console.log(token)

        res.cookie("access_token", token, { expires: new Date(Date.now() + 900000), httpOnly: false })            
           .status(200)
           .json({...others, "token": token});

    } catch(err) {
        next(err)
    }
};