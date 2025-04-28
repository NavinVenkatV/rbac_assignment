import { MdDelete } from "react-icons/md";

interface Typess {
    title: string;
    image: any;
    category: any;
    onClick: () => void;
    admin?: boolean
}

function Photo({ title, admin, image, category, onClick }: Typess) {
    return (
        <div className="flex flex-col gap-1">
            <img
                src={image}
                className="w-[400px] h-[300px] shadow-xl shadow-neutral-500 object-cover rounded-xl"
                alt="blog-image"
            />
            <div className="flex justify-between mt-5 ">
                <p className="text-orange-700 font-bold">{category}</p>
                {admin && <p><MdDelete color="red" size={20} className="hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out" /></p>
                }
            </div>
            <p
                onClick={onClick}
                className="text-xl cursor-pointer text-neutral-600  hover:text-orange-700 transition-all duration-200 ease-in-out"
            >
                {title}...<span className="text-sm">more</span>
            </p>
        </div>
    );
}

export default Photo;
