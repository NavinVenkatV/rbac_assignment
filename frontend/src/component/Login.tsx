import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./ui/Spinner";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signIn, setSignIn] = useState<boolean>(false);
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    const token = async () =>{
      const isIt =  localStorage.getItem('token')
      console.log(isIt)
      if(isIt){
        navigate('/home')
      }
    }
    token();
  },[])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true)
      const url = signIn
        ? 'https://rbac-assignment-39wk.onrender.com/signUp'
        : 'https://rbac-assignment-39wk.onrender.com/signIn';

      const res = await axios.post(url, { email, password });
      const token = res.data.data.token;
      if (token) {
        localStorage.setItem("token", token);
        setEmail("");  // Clear email after successful login
        setPassword("");  // Clear password after successful login
      }
      setLoading(false)
      navigate('/home');
    } catch (error) {
      console.error("Error:", error);
      setLoading(false)
      alert("User doesn't exists, please sign up");
    }
  };

  return (
    <div className="flex w-full h-screen px-3 justify-center gap-10 overflow-y-hidden items-center md:bg-gray-100">
      <div className="md:flex my-12 gap-20 rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full">

        {/* Left side - Form */}
        <div className="w-full md:w-1/2 md:p-10 p-4 bg-neutral-700 text-white rounded-2xl flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-orange-700 font-source-serif">
            Welcome to Newshub
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-white font-source-serif">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-neutral-500 p-3 rounded-lg focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-white font-source-serif">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-neutral-500 p-3 rounded-lg focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white text-center p-3 rounded-lg hover:bg-white text-xl hover:text-black mt-7 cursor-pointer transition-all duration-200 font-source-serif"
            >
              {loading ? <div className="w-full text-center flex justify-center items-center">
                <Spinner /> 
              </div>: (signIn ? "Sign Up" : "Sign In")}
            </button>

            <p
              onClick={() => setSignIn(prev => !prev)}
              className="text-center cursor-pointer"
            >
              {signIn ? (
                <>Already have an account? <span className="text-orange-700 hover:text-orange-600">Click</span></>
              ) : (
                <>Don't have an account? <span className="text-orange-700 hover:text-orange-600">Click</span></>
              )}
            </p>
          </form>
        </div>

        {/* Right side - Video */}
        <div className="md:w-1/2 hidden md:block">
          <video
            src="/vid2.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          ></video>
        </div>

      </div>
    </div>
  );
}

export default Login;
