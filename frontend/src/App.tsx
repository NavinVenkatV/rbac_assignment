import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './component/HomePage'
import Admin from './component/Admin';
import Login from './component/Login';


function App() {
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
