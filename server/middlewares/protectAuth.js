import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectAuth = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]|| req.cookies.token;
  if (!token) {
    return res.status(400).send({ error: "Please login first" });
  }
  try {
    const decoded =  jwt.verify(token , process.env.JWT_SECRET);
    if(!decoded){
        return res.status(400).send({ error: "Please login first" });
    }
    const user = await User.findById(decoded.id)
    if(!user){
        return res.status(400).send({ error: "Please login first" });
    }
    
    req.user = user;
    next();

  } catch (error) {
    console.log(error);
    res.status(401).send({ error: "Invalid or expired token, please login again" });
  }
};
