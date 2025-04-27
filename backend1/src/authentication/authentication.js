import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req, res, next) => {
  console.log("enterred midddddddddleewarreeeeeeeeeeeeeeeeee")
  const authHeader = req.headers;
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }
  const token = authHeader

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    console.log("successsssssssssssssssssssss")
    next();
  } 
  catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    return res.status(401).json({ message: "Invalid token" });
  }
};

