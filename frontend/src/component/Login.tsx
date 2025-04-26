// src/pages/Login.jsx
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.data && data.data.token) {
        localStorage.setItem("token", data.data.token);
        alert("Login successful!");
      } else {
        alert("Login failed: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="flex h-full justify-center gap-10 overflow-y-hidden items-center bg-gray-100">
      <div className="flex my-12 gap-20 rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full">
        {/* Left side - Form */}
        <div className="w-1/2 p-10 bg-neutral-700 text-white rounded-2xl flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-center mb-6 text-orange-700 font-source-serif">Welcome to newshub</h1>
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
              className="w-full bg-black text-white p-3 rounded-lg hover:bg-white text-xl  hover:text-black mt-7 cursor-pointer transition-all duration-200 font-source-serif"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right side - Video */}
        <div className="w-1/2">
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
