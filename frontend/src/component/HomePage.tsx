import { useEffect, useState } from "react"
import Nav from "./Nav"
import Button from "./ui/Button"
import Subscribe from "./ui/Sunscribe"
import axios from "axios"
import Photo from "./Photo"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom";

function HomePage() {
    type Blog = {
        id : string, 
        title : string, 
        category : string, 
        mainImage : string
    }
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
        const endPoint = async () => {
            const res = await axios.get('https://rbac-assignment-39wk.onrender.com/get-all-blogs');
            console.log(res.data);
            setBlogs(res.data.blogs)
        }
        endPoint();
    }, [])

    return (
        <div className="w-full h-full overflow-hidden text-white bg-black  relative md:rounded-2xl px-2 md:px-5 py-5">
            <div className="relative ">
                <Nav />
            </div>
            <div className="relative bottom-16 hidden  z-50 mt-0 border-4 border-orange-700 md:flex justify-between bg-neutral-800 p-3">
                <div className="flex gap-2 md:gap-10">
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
            <div className="relative bg-white pb-7 rounded-xl mt-2 text-black px-2 w-full h-full">
                <div className="text-black text-center text-4xl py-3">All Categories</div>
                <hr />
                <div className="flex flex-wrap gap-8 justify-center mt-7">
                    {blogs.map((b, i) => (
                        <div key={i} className="w-[400px] h-auto"> {/* Set fixed size for each image container */}
                            <Photo onClick={() =>{
                                navigate(`/blog?id=${b.id}`)
                            }} title={b.title} category={b.category} image={b.mainImage} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage
