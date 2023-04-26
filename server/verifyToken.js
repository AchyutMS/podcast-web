import jwt from "jsonwebtoken"
import User from "./models/User.js";
import { createError } from "./error.js"

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) return next(createError(404,"User not Authenticated"))

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) return next(createError(403,"Invalid Token"))

        req.user = user
        console.log(req.user)
        next()
    })
}

export const verifyAuth = async (req, res, next) => {
    console.log('hihihihihihihihihihihihihihihihihihihihihihihih')
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token){
      console.log('no token')
      return res.status(401).send({ valid: false });
    } 
    console.log('hfhfhfhfhfhfh')
    try {
      console.log('inside try')
      const decoded = jwt.verify(token, process.env.JWT);
      console.log("decodes",decoded.id)
      const user = await User.findById(decoded.id);
      user.password = '';
      res.status(200).send({ valid: true, user });
    } catch (err) {
      res.status(401).send({ valid: false });
    }
}