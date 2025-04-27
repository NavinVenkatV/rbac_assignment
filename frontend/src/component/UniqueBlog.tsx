import { useEffect, useState } from "react"
import Nav from "./Nav"
import Button from "./ui/Button"
import Subscribe from "./ui/Sunscribe"
import axios from "axios"
import Footer from "./Footer"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Skeleton from '@mui/material/Skeleton';

function UniqueBlog() {
    const [loading, setLoading] = useState(true);
    type blogType = {
        id: string,
        mainImage: string,
        content: string,
        category: string
    }
    const navigate = useNavigate()
    const location = useLocation();
    //@ts-ignore
    const [blogs, setBlogs] = useState<blogType[{}]>({});

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/')
        }
        window.scrollTo(0, 0)
        const queryParams = new URLSearchParams(location.search); // Get query params from the URL
        const id = queryParams.get('id');
        console.log(id)
        const endPoint = async () => {
            const res = await axios.get(`https://rbac-assignment-39wk.onrender.com/get-blog?id=${id}`)
            console.log(res.data);
            setBlogs(res.data.blog)
            setLoading(false)
        }
        endPoint();
    }, [])


    return (
        <div className="w-full h-full overflow-hidden text-white bg-black  relative md:rounded-2xl px-2 md:px-5 py-5">
            <div>
                <Nav />
            </div>
            <div className="relative hidden  z-50 mt-0 border-4 border-orange-700 md:flex justify-between bg-neutral-800 p-3">
                <div className="flex gap-10">
                    <Button title="All Categories" />
                    <Button title="Fashion" />
                    <Button title="Technology" />
                    <Button title="Entertainment" />
                    <Button title="Business" />
                    <Button title="Sport" />
                </div>
                <div className="flex gap-5">
                    <Subscribe title="Subscribe For $0.3/W" />
                    <Subscribe title="SignIn" />
                </div>
            </div>
            <div className="relative bg-white rounded-xl pb-7 mt-2 text-black px-2 w-full h-full">
                {loading ? (
                    <div className="p-5">
                        <Skeleton
                                variant="text"
                                width={100}
                                height={10}
                                className="mt-16"
                            />
                            <Skeleton
                                variant="rounded"
                                width={210}
                                height={10}
                                className="mt-2"
                            />
                        <Skeleton
                                variant="rectangular"
                                width={1000}
                                height={500}
                                className="mb-3 rounded-2xl mt-5 w-full text-center flex justify-center"
                            />
                    </div>
                ) : (
                    <div>
                        <div className="text-black font-bold text-3xl md:text-6xl py-3">{blogs.category}</div>
                        <div className="flex flex-col gap-2">
                            <p className="text-2xl md:text-3xl font-bold text-orange-700">{blogs.title}</p>
                            <hr />
                            <div className="flex justify-center">
                                <img src={`http://localhost:3001/${blogs.mainImage} `}
                                    alt="" className="rounded-xl w-[1000px] h-[500px] mt-3 object-cover" />
                            </div>
                            <p className="text-xl mt-3 whitespace-pre-line">{blogs.content}</p>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default UniqueBlog
