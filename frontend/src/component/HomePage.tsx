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
            <div className="relative">
                <div className="absolute top-5 left-12 mt-5 z-50 text-black">
                    navin Venkat
                </div>
                <div className="flex justify-center">
                    <div className="relative z-0 w-[1370px] bg-neutral-500 rounded-2xl mt-5 h-screen flex justify-center">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1390px] h-[686px] rounded-2xl bg-neutral-300"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1400px] h-[676px] rounded-2xl bg-white"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage
