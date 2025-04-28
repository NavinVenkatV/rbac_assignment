import bcrypt from "bcrypt"
import express from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config();
import { authMiddleware } from "./authentication/authentication.js";
import { PrismaClient } from "@prisma/client";
import { upload } from "../multer/multer.js";
import AWS from 'aws-sdk';
const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors())
app.use('/uploads', express.static('uploads'))

AWS.config.update({
    accessKeyId: process.env.Access_key_ID,
    secretAccessKey: process.env.Secret_access_key,
    region: process.env.REGION,
    signatureVersion: 'v4',
});

const s3 = new AWS.S3(); 

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
                type: userType
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

app.post('/signIn', async (req, res) => {

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(401).json({ msg: "Invalid email or password!" });
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (!user) {
            return res.status(401).json({ msg: "User doesn't exists, kindly please singIn!" })
        }
        const chechHashPassword = await bcrypt.compare(password, user.password)

        if (!chechHashPassword) {
            return res.status(401).json({ msg: "Invalid password!" })
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

    } catch (e) {
        console.error(e)
        return res.status(401).json({ msg: "Internal server error!" })
    }
})


app.post('/createBlog', upload.fields([{ name: 'mainImage' }]),
    async (req, res) => {
        console.log('Received /createBlog request');
        const { title, category, subtitle, content, tags } = req.body;

        try {
            const user = await prisma.user.findUnique({
                where: { email: "vnavinvenkat@gmail.com" }
            });

            if (!user) {
                return res.status(404).json({ msg: "User not found!" });
            }

            if (!req.files || !req.files['mainImage'] || !req.files['mainImage'][0]) {
                return res.status(400).json({ msg: "Main image file is missing!" });
            }

            console.log(req.files['mainImage'])

            const params = {
                Bucket: process.env.BUCKET_NAME,   // Your S3 Bucket name
                Key: `${Date.now()}-${req.files['mainImage'][0].originalname}`,  // File name in S3 (unique)
                Body: req.files['mainImage'][0].buffer,  // The file content (buffer from multer)
                ContentType: req.files['mainImage'][0].mimetype,  // MIME type (image/jpeg, image/png, etc.)
            };

            if (!params.Body) {
                console.error("File buffer is missing!");
                return res.status(400).json({ msg: "File buffer is missing!" });
            }

            const upload = await s3.upload(params).promise();
            console.log("AWSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS", upload)

            if (upload) {
                const createBlog = await prisma.blog.create({
                    data: {
                        userId: user.id,
                        category,
                        title,
                        subtitle,
                        content,
                        tags,
                        mainImage: upload.Location, // now safe
                    }
                });
                return res.json({ msg: "Blog created successfully!", blog: createBlog.id });
            } else {
                return res.status(400).json({ msg: "Error creating Blog!"});
            }

        } catch (e) {
            console.error(e);
            return res.status(400).json({ msg: "Error creating Blog!" });
        }
    });


app.get('/get-all-blogs', async (req, res) => {
    try {
        const blogs = await prisma.blog.findMany({})
        return res.status(201).json({
            message: "Blog retrieved successfully",
            blogs: blogs
        });

    } catch (e) {
        return res.status(400).json({ msg: "Something went wrong!" })
    }
})

app.get('/get-blog', async (req, res) => {
    try {
        console.log("enterred endpoineeeeeeeeeeeeeee")
        const { id } = req.query;
        console.log(id)
        const blog = await prisma.blog.findUnique({
            where: {
                id: id
            }
        })
        console.log(blog)
        return res.json({ msg: "Blog retrieved successfully", blog: blog })
    } catch (e) {
        return res.status(400).json({ msg: "Something went wrong!" })
    }
})

app.get('/delete-blog', async (req, res) => {
    try {
        const { id } = req.query;
        console.log(id)
        const blog = await prisma.blog.delete({
            where: {
                id: id
            }
        })
        console.log(blog)
        return res.json({ msg: "Blog deleted successfully", blog: blog })
    } catch (e) {
        return res.status(400).json({ msg: "Something went wrong!" })
    }
})
// app.post('/createBlog', authMiddleware, upload.fields([{ name: 'bloDp' }, { name: 'mainImage' }]),
//     async (req, res) => {
//         const { title, subtitle, content, tags } = req.body;
//         //chech the user is an admin
//         try {
//             const user = await prisma.user.findUnique({
//                 where: {
//                     email: req.email
//                 }
//             })
//             if (email == "vnavinvenkat@gmail.com") {
//                 return res.status(401).json({ msg: "Only admin allowed to handle the blogs!" })
//             }
//             const createBlog = await prisma.blog.create({
//                 data: {
//                     userId: user.id,
//                     title,
//                     subtitle,
//                     content,
//                     tags,
//                     blogDp: req.files['bloDp'][0].path,
//                     mainImage: req.files['mainImage'][0].path,
//                 }
//             })
//             return res.json({ msg: "Blog created successfully!" })
//         } catch (e) {
//             console.error(e)
//             return res.json({ msg: "Error creating Blog!" })
//         }
//     })

app.listen(3001, () => {
    console.log("App listening on port 3001")
})