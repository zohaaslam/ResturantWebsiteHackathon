import React from 'react'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Header from './Header';



const Signup = () => {
  return (
  <div id='signup'   className='bg-white'>
    <Header />
      
 <section className="py-16 mt-[70px]">
 <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
   <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
   <form>
     <div className="mb-4">
       <label className="block mb-2 font-medium">Name</label>
       <input
         type="text"
         className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
         placeholder="Enter your name"
       />
     </div>
     <div className="mb-4">
       <label className="block mb-2 font-medium">Email</label>
       <input
         type="email"
         className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
         placeholder="Enter your email"
       />
     </div>
     <div className="mb-4">
       <label className="block mb-2 font-medium">Password</label>
       <input
         type="password"
         className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
         placeholder="Enter your password"
       />
     </div>
     <div className="flex items-center mb-4">
       <input type="checkbox" className="mr-2" />
       <span>Remember me?</span>
     </div>
     <button
       type="submit"
       className="w-full bg-[#FF9f0D] hover:bg-yellow-600 text-white font-bold py-2 rounded"
     >
       Sign Up
     </button>
     <p className="text-center mt-4">
       <Link href="/forgot-password" className="text-[#FF9f0D]">Forgot password?</Link>
     </p>
   </form>
   <div className="text-center mt-8">
     <p>or</p>
     <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
     <FcGoogle className="h-6 size-6 mr-2" />  
       Sign up with Google
     </button>
     <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
     <FaApple  className="h-6 size-7 mr-2" /> 
       Sign up with Apple
     </button>
   </div>
 </div>
</section>
</div>
  )
}

export default Signup