import { useState } from 'react';
import axios from "axios"

function CreateBlogForm() {
    // const [blogDp, setBlogDp] = useState<File | null>(null);
    const [mainImage, setMainImage] = useState<File | null>(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');

    const handleButton = async () =>{
        console.log("entered blog submit")
        if(!mainImage || !title || !category || !subtitle || !content || !tags){
            alert("Enter all the inputs admin bro!")
        }
        const token = localStorage.getItem('token')
        console.log(token)
        if(!token){
            return;
        }
        const blog = await axios.post('http://localhost:3001/createBlog', {
            mainImage : mainImage,
            title : title,
            category : category, 
            subtitle : subtitle, 
            content : content,
            tags : tags
        }, {
            headers : {token}
        })
        if(blog.data){
            alert("ok da uploaded")
        }
    }

    return (
        <div className="w-full flex gap-36 px-32 mt-10 bg-neutral-800 text-white shadow-lg rounded-2xl p-8">
            <div >
                <h2 className="font-bold mb-6 text-7xl text-center text-orange-700 ">Create New Blog</h2>
                <hr />
                <video
                    className="mt-5 w-[500px] h-[600px] rounded-2xl object-cover"
                    src="/vid.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>            
            </div>
            <div  className='w-[500px] mt-22'>
                {/* Upload Blog DP
                <div className="mb-5">
                    <label className="block text-white text-2xl font-semibold mb-2">Upload Blog Display Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setBlogDp(e.target.files ? e.target.files[0] : null)}
                        className="block w-full text-sm text-gray-500 border cursor-pointer file:mr-4 file:cursor-pointer rounded-full file:py-2 file:px-4 file:border-0 
                     file:text-sm file:font-semibold file:bg-blue-50 file:text-black hover:file:bg-blue-100"
                    />
                </div> */}

                {/* Upload Main Image */}
                <div className="mb-5">
                    <label className="block text-white text-2xl font-semibold mb-2">Upload Main Blog Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setMainImage(e.target.files ? e.target.files[0] : null)}
                        className="block w-full text-sm text-gray-500 border cursor-pointer file:mr-4 file:cursor-pointer rounded-full file:py-2 file:px-4 file:border-0 
                     file:text-sm file:font-semibold file:bg-blue-50 file:text-black hover:file:bg-blue-100"
                    />
                </div>

                {/* Title */}
                <div className="mb-5">
                    <label className="block text-white text-2xl font-semibold mb-2">Blog Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter the title..."
                        className="w-full px-4 py-2 border border-neutral-700 focus:outline-none rounded-lg"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-white text-2xl font-semibold mb-2">Blog Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="Enter the title..."
                        className="w-full px-4 py-2 border border-neutral-700 focus:outline-none rounded-lg"
                    />
                </div>

                {/* Subtitle */}
                <div className="mb-5">
                    <label className="block text-white text-2xl font-semibold mb-2">Subtitle</label>
                    <input
                        type="text"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        placeholder="Enter subtitle..."
                        className="w-full px-4 py-2 border border-neutral-700 focus:outline-none rounded-lg"
                    />
                </div>

                {/* Content */}
                <div className="mb-5">
                    <label className="block text-white text-2xl font-semibold mb-2">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your blog content..."
                        rows={6}
                        className="w-full px-4 py-2 border border-neutral-700 focus:outline-none rounded-lg"
                    ></textarea>
                </div>

                {/* Tags */}
                <div className="mb-5">
                    <label className="block text-white text-2xl font-semibold mb-2">Tags</label>
                    <input
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="eg. Tech, Coding, Life"
                        className="w-full px-4 py-2 border border-neutral-700 focus:outline-none rounded-lg"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        className="bg-white text-black hover:text-white cursor-pointer hover:bg-neutral-900 font-bold py-2 px-6 rounded-full transition-all duration-200 ease-in-out"
                        onClick={handleButton}
                    >
                        Create Blog
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateBlogForm;
