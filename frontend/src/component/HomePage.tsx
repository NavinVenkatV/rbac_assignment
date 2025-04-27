import { useEffect, useState } from "react"
import Nav from "./Nav"
import Button from "./ui/Button"
import Subscribe from "./ui/Sunscribe"
import axios from "axios"
import Photo from "./Photo"
import Footer from "./Footer"

function HomePage() {
    const [blogs, setBlogs] = useState([]);
    const [category, setCategory] = useState("All Categories")
    const [ showBlog, setShowBlog ] = useState(false)
    const [ uniqueBlog, setUniqueBlog ] = useState("")

    useEffect(() => {
        const endPoint = async () => {
            const res = await axios.get('http://localhost:3001/get-all-blogs');
            console.log(res.data);
            setBlogs(res.data.blogs)
        }
        endPoint();
    }, [])

    const handleImageClick = async (id : string) =>{
        try {
            console.log(id)
            const res = await axios.get(`http://localhost:3001/get-blog?id=${id}`)
            console.log(res.data)
            if(res.data){
                setShowBlog(true)
            }
        }catch(e){
            alert("Something went wrong")
        }
    }

    return (
        <div className="w-full h-full text-white bg-black  relative rounded-2xl px-5 py-5">
            <div>
                <Nav />
            </div>
            <div className="relative z-50 mt-52 border-4 border-orange-700 flex justify-between bg-neutral-800 p-3">
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
            <div className="relative bg-white rounded-xl mt-2 text-black px-2 w-full h-full">
                <div className="text-black text-center text-4xl py-3">{category}</div>
                <div className="flex flex-wrap gap-8 justify-center mt-7">
                    {blogs.map((b, i) => (
                        <div key={i} className="w-[400px] h-auto"> {/* Set fixed size for each image container */}
                            <Photo onClick={()=>{
                                handleImageClick(b.id)
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
