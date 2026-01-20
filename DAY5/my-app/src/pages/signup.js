import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://example.com/api/signup",
        {
          name,
          email,
          password,
        }
      );

      console.log(response.data);
      alert("Signup successful!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">
      <form
        onSubmit={handleSubmit}
         className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <img className="w-100  px-10 py-10"src="https://cdn.shopify.com/s/files/1/0548/6477/3216/files/logo_200x60@2x.png?v=1696343522.webp"></img>
        <h2 className= "text-center text-gray-500 mb-6">
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Sign Up
        </button>
        <p className="text-center"> Already have an account?  <Link className='xyz text-blue-400' to='/login' >Login</Link></p>
         </form>
    </div>
  );
}
export default  Signup;