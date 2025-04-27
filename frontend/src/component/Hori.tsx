import Marquee from "./Marquee"

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