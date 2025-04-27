import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './component/HomePage'
import Admin from './component/Admin';
import Login from './component/Login';
import { useEffect } from 'react';
import Lenis from "@studio-freight/lenis";



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
   <div className='bg-white px-7 pt-2 w-scren h-full'>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/signIn" element={<Login />} />
    </Routes>
   </div>
  );
}

export default App
