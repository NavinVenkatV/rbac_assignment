import bcrypt from "bcrypt"
import express from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();
// import { authMiddleware } from "./authentication/authentication.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/signUp", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userType = email === 'vnavinvenkat@gmail.com' ? "admin" : "user";

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        type : userType
      },
    });

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      message: "User created successfully",
      data: {
        userId: user.id,
        email: user.email,
        token, 
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.post('/signIn', async (req, res) =>{

    const { email, password } = req.body;
    if(!email || !password){
        return res.status(401).json({msg : "Invalid email or password!"});
    }
    try{
        const user = await prisma.user.findUnique({
            where : {
                email : email
            }
        })
        if(!user){
            return res.status(401).json({msg : "User doesn't exists, kindly please singIn!"})
        }
        const chechHashPassword = bcrypt.compare(password, user.password)
        
        if(!chechHashPassword){
            return res.status(401).json({msg : "Invalid password!"})
        }
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );

          return res.status(201).json({
            message: "User created successfully",
            data: {
              userId: user.id,
              email: user.email,
              token, 
            },
          });
          
    }catch(e){
        console.error(error)
        return res.status(401).json({msg : "Internal server error!"})
    }
})

app.listen(3000, () =>{
    console.log("App listening on port 3000")
})