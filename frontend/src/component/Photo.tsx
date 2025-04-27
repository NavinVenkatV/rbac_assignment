interface Typess {
    title: string;
    image: string;
    category: any;
    onClick: () => void;
}

function Photo({ title, image, category, onClick }: Typess) {
    return (
        <div className="flex flex-col gap-1">
            <img
                src={`http://localhost:3001/${image}`}
                className="w-[400px] h-[300px] shadow-xl shadow-neutral-500 object-cover rounded-xl"
                alt="blog-image"
            />
            <p className="text-orange-700 font-bold">{category}</p>
            <p
                onClick={onClick}
                className="text-xl cursor-pointer hover:text-orange-700 transition-all duration-200 ease-in-out"
            >
                {title}...<span className="text-sm">read more</span>
            </p>
        </div>
    );
}

export default Photo;
