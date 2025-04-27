import React from "react";
import Marquee from "./Marquee"

const elements = [
  <h1 key="1" className="text-2xl  font-bold">AI Technology</h1>,
  <h1 key="2" className="text-2xl    font-bold">Instagram</h1>,
  <h1 key="3" className="text-2xl  font-bold">Facebook</h1>,
  <h1 key="4" className="text-2xl  font-bold">WhatsApp</h1>,
  <h1 key="5" className="text-2xl font-bold">Twitter</h1>,
  <h1 key="6" className="text-2xl  font-bold">Google</h1>,
  <h1 key="7" className="text-2xl font-bold">Amazon</h1>,
  <h1 key="8" className="text-2xl  font-bold">Dabba Corp</h1>,
];

export default function Hori() {
  return (
    <div className="bg-black px-20 py-36 text-white">
      <div className="justify-center items-center space-x-4">
        <h1 className="text-5xl text-center"><span className={`text-red-700`}>Trusted</span> By</h1>
        <div className="">
          <Marquee from="0" to="-100%"/>
        </div>
      </div>
    </div>
  );
}