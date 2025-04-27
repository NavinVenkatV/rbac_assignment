import { useEffect } from "react"
import CreateBlogForm from "./Form"
import Nav from "./Nav"
import Button from "./ui/Button"
import Subscribe from "./ui/Sunscribe"
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate =  useNavigate();
    useEffect(() =>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
    },[])
    return (
        <div className="w-full h-full overflow-hidden text-white bg-black  relative md:rounded-2xl px-2 md:px-5 py-5">
            <div>
                <Nav />
            </div>
            <div className="relative bottom-16 hidden z-50 mt-0 border-4 border-orange-700 md:flex justify-between bg-neutral-800 p-3">
                <div className="flex gap-10">
                    <Button title="All Categories" />
                    <Button title="Fashion" />
                    <Button title="Culinary" />
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
            <div className="relative  pb-7 md:mt-10">
            <CreateBlogForm/>

            </div>
            

        </div>
    )
}

export default HomePage
