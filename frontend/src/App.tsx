import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './component/HomePage'
import Admin from './component/Admin';
import Login from './component/Login';
import { useEffect } from 'react';
import Lenis from "@studio-freight/lenis";
import UniqueBlog from './component/UniqueBlog';



function App() {
  
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return (
   <div className='bg-white md:px-7 md:pt-2 w-scren h-full'>
     <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/" element={<Login />} />
      <Route path='/blog' element={<UniqueBlog />} />
    </Routes>
   </div>
  );
}

export default App
