import { VscTerminalUbuntu } from 'react-icons/vsc'
import { FaLinkedin, FaXTwitter, FaCode } from 'react-icons/fa6';


function Footer() {
    return (
        <div>
            <div className='text-white bg-black  mt-10 md:p-10  rounded-t-2xl w-full "}'>
                <div className='md:flex justify-between '>
                    <div className='flex gap-2'>
                        <div className='flex flex-col justify-center'><VscTerminalUbuntu  size={30} /></div>
                        <p className='flex items-center text-orange-700 text-4xl md:text-7xl mb-2 '>newshub</p>
                    </div>
                    <div className='flex gap-1 items-center text-neutral-500 font-bold'>
                        <div>Current Status</div>
                        <div className='flex items-center mt-1'>
                            <span className='w-2 h-2  bg-green-600 rounded-full'></span>
                        </div>
                    </div>
                </div>
                <p className="h-0.5 my-7 bg-neutral-800 w-full"></p>

                <div className="md:flex gap-4 md:justify-between items-center text-neutral-500 text-sm py-4 ">
                    <div className="flex gap-4">
                        <a href="/terms" className="flex items-center gap-1 hover:text-white transition-all duration-200 ease-in-out ">
                             Terms Of Services
                        </a>
                        <a href="/privacy" className="flex items-center gap-1 hover:text-white transition-all duration-200 ease-in-out ">
                        Privacy
                        </a>
                    </div>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <a href="https://www.linkedin.com/in/navin-venkat-38bb28279/" target="_blank" className="flex items-center gap-1 hover:text-white transition-all duration-200 ease-in-out ">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href="https://x.com/nav_venk" target="_blank" className="flex items-center gap-1 hover:text-white transition-all duration-200 ease-in-out ">
                            <FaXTwitter /> 
                        </a>
                        <a href="https://navinvenkat.xyz/" className="flex items-center gap-1 hover:text-white transition-all duration-200 ease-in-out ">
                            <FaCode /> Developer
                        </a>
                    </div>
                </div>
                <div className='text-center text-orange-700 font-sm font-bold mt-10'>@2025 - All rights reserved</div>

            </div>
        </div>
    )
}

export default Footer