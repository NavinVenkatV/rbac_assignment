// src/components/Nav.jsx
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate(); 

  return (
    <div className="text-white bg-black font-source-serif ">
      <div className="flex justify-between p-4 m-0 relative z-50">
        <div className="flex gap-5">
          <Titles title="Home"  
          onClick={() =>{
            navigate('/')
          }}
          />
          <Titles title="News"  />
          <Titles title="Tv"  />
          <Titles title="Podcast"  />
          <Titles title="Carrer" />
          <Titles title="Contact"  />
        </div>
        <div className="shrink-0">
          <Titles 
            title="Admin" 
            onClick={() => navigate('/admin')} 
          />
        </div>
      </div>

      {/* newshub text, no margin or padding */}
      <div className="flex justify-center m-0 p-0 leading-none absolute top-2 left-48 z-0">
        <p className="text-[300px] m-0 p-0 leading-none font-source-serif font-bold">
          newshub
        </p>
      </div>
    </div>
  );
}

export default Nav;
