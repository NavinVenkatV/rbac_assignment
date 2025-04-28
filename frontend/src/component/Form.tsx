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
    const [loading, setLoading] = useState('Create Blog')

    const handleButton = async () => {
        setLoading('Submitting...')
        console.log("Entered blog submit");
    
        // Check for missing fields
        if (!mainImage || !title || !category || !subtitle || !content || !tags) {
            alert("Enter all the inputs, admin bro!");
            return;
        }
    
        // Validate file type (if needed)
        const allowedTypes = ["image/jpeg", "image/png"];
        if (!allowedTypes.includes(mainImage.type)) {
            alert("Please upload a valid image (JPEG/PNG).");
            return;
        }
    
        // Validate image size (e.g., max 5MB)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (mainImage.size > maxSize) {
            alert("File size exceeds the 5MB limit.");
            return;
        }
    
        // Get token from localStorage
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Token missing!");
            return;
        }
    
        // Prepare form data
        const formData = new FormData();
        formData.append("mainImage", mainImage);
        formData.append("title", title);
        formData.append("category", category);
        formData.append("subtitle", subtitle);
        formData.append("content", content);
        formData.append("tags", tags);
    
        try {
            const response = await axios.post('https://rbac-assignment-1.onrender.com/createBlog', formData, {
                headers: {
                    token,  
                },
            });
    
            if (response.data) {
                setMainImage(null);
                setCategory('');
                setContent('');
                setSubtitle('');
                setTags('');
                setTitle('');
                setTimeout(() =>{
                    setLoading('Submitted!')
                }, 2000)
                setLoading("Submit")
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error uploading blog!");
        }
    };
    
      

    return (
        <div className="w-full  md:px-32 mt-10 bg-neutral-800 text-white shadow-lg rounded-2xl md:p-8">
            <div className=' md:flex md:gap-36'>
            <div className='py-10'>
                <h2 className="font-bold mb-6 text-2xl md:text-7xl text-center text-orange-700 ">Create New Blog</h2>
                <video
                    className="mt-5 w-[500px] h-[600px] rounded-2xl object-cover"
                    src="/vid.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>            
            </div>
            <div  className='w-full md:w-[500px] mt-22 p-2 py-10'>
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
                    <label className="block text-neutral-500 text-2xl font-semibold mb-2">Upload Main Blog Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setMainImage(e.target.files ? e.target.files[0] : null)}
                        className="block w-full text-sm text-gray-500 border cursor-pointer file:mr-4 file:cursor-pointer rounded-full file:py-2 file:px-4 file:border-0 
                     file:text-sm file:font-semibold transition-all duration-300 ease-in-out file:bg-white file:text-black "
                    />
                </div>

                {/* Title */}
                <div className="mb-5">
                    <label className="block text-neutral-500 text-2xl font-semibold mb-2">Blog Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter the title..."
                        className="w-full px-4 py-2 border border-neutral-700 focus:outline-none rounded-lg"
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-neutral-500 text-2xl font-semibold mb-2">Blog Category</label>
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
                    <label className="block text-neutral-500 text-2xl font-semibold mb-2">Subtitle</label>
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
                    <label className="block text-neutral-500 text-2xl font-semibold mb-2">Content</label>
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
                    <label className="block text-neutral-500 text-2xl font-semibold mb-2">Tags</label>
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
                        {loading}
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CreateBlogForm;
