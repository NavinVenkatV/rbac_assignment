// src/components/Nav.jsx
import { useNavigate } from "react-router-dom";
import Hamburger from 'hamburger-react'
import { useEffect, useState } from "react";
import { motion } from "motion/react"
import { jwtDecode } from "jwt-decode";

function Titles(props: { title: string; onClick?: () => void }) {
  return (
    <p
      onClick={props.onClick}
      className="text-xl transition-all cursor-pointer 
      duration-200 ease-in-out hover:text-neutral-400 font-source-serif"
    >
      {props.title}
    </p>
  );
}

function Nav() {
  const [admin, setAdmin] = useState(false)
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  type jwtType = {
    email : string
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      console.log('sssssssssssssssssssssssssssssssssssssssssssssssssssssss')
      const decoded = jwtDecode<jwtType>(token)
      console.log('tttttttttttttt')
      console.log(decoded)
      if (decoded?.email === 'vnavinvenkat@gmail.com') {
        setAdmin(true)
      }
    }
  }, [])

  const handleOut = ()=>{
    localStorage.clear();
    navigate('/')
  }

  return (
    <div className="text-white relative bg-black font-source-serif ">
      <div className="md:flex hidden  justify-between p-4 m-0 relative z-50">
        <div className="flex gap-5">
          <Titles title="Home"
            onClick={() => {
              navigate('/home')
            }}
          />
          <Titles title="Podcast" />
          <Titles title="Carrer" />
          <Titles title="Contact" />
        </div>
        {admin && <div className="shrink-0">
          <Titles
            title="Admin"
            onClick={() => navigate('/admin')}
          />
        </div>}
      </div>

      <div className="md:hidden relative z-50">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {isOpen && (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}

          className="relative z-50 mt-3 bg-orange-700 rounded-2xl p-3">
          <div className="flex flex-col gap-5">
            <Titles title="Home" onClick={() => navigate('/home')} />
            {admin && <div className="shrink-0">
              <Titles
                title="Admin"
                onClick={() => navigate('/admin')}
              />
            </div>}
            <Titles title="Podcast" />
            <Titles title="Career" />
            <Titles title="Contact" />
            <Titles title="Sign Out" onClick={handleOut}
            />
          </div>
        </motion.div>
      )}


      {/* newshub text, no margin or padding */}
      <motion.p
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut" }}
        className="flex justify-center items-center text-[70px] md:text-[300px] relative top-1 md:-top-16 text-center mb-10 leading-none font-source-serif font-bold">
        news <span className="text-orange-700">hub</span>
      </motion.p>
    </div>
  );
}

export default Nav;
