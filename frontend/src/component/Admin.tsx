import CreateBlogForm from "./Form"
import Nav from "./Nav"
import Button from "./ui/Button"
import Subscribe from "./ui/Sunscribe"

function HomePage() {
    return (
        <div className="w-full h-full text-white bg-black relative rounded-2xl px-5 py-5">
            <div>
                <Nav />
            </div>
            <div className="relative z-50 mt-52 flex justify-between bg-neutral-800 p-3">
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
            <div className="relative mt-10">
            <CreateBlogForm/>

            </div>

        </div>
    )
}

export default HomePage
