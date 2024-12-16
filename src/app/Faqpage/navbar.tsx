// import React from 'react'
// import Image from 'next/image'
// import Bag from './bagicon'
// import Link from 'next/link'
// import Checkout from './Checkout'


// const Navbar = () => {
//   return (
//     <div className='bg-black'>
//       <div className='flex items-center justify-center text-center ml-28 mt-4'>
//         <h1 className='text-[#FF9f0D] font[Helvetica]   text-[24px] font-bold  '>Food</h1>
//         <h1 className='text-[#FF9f0D] font[Helvetica]  text-[24px] font-bold  '>tuck</h1>
//        </div>


//       <header className="text-gray-600 body-font">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <nav className="flex lg:w-2/5 flex-wrap mr-24 items-center text-base md:ml-auto">
//       <Link href={'/'} className="mr-5 text-white ">Home</Link>
//       <Link  href={'#menu'} className="mr-5   text-white ">Menu</Link>
//       <Link  href={'#blog'}className="mr-5  text-white ">Blog</Link>
//       <Link href={'/pages'} className="mr-5  text-white">Pages</Link>
      
//       <Link href={'#about'} className="mr-5 text-white ">About</Link>
      
//       <Link  href={'#shop'}className="mr-5  text-white ">Shop</Link>
//       <Link href={'#contact'} className="mr-5 text-white ">Contact</Link>
//     </nav>
   
//     <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
//     <form className='flex items-center ml-80 justify-end gap-4 bg-black p-2 border-[1px] border-[#FF9f0D] rounded-[27px] flex-1'>
//   <input type='text' placeholder='Search' className='flex-1 justify-end  bg-transparent outline-none'/>
//   <button className='cursor-pointer '>
//   <Image
//    src={"/vector.png"}
//    alt='search'
//    width={20}
//    height={20}
//   className='mr-8 size-5  ' />

//   </button>
//  </form>
//  <Bag />
//   </div>
//   </div>
// </header>





//     </div>
//   )
// }

// export default Navbar



// import React from 'react'
// import Image from 'next/image'
// import Bag from './bagicon'
// import Link from 'next/link'


// const ConNavbar = () => {
//   return (
//     <div className='bg-black'>
     



//       <header className="text-white mt-[80px] body-font">

//   <div className="container mx-auto flex justify-between flex-wrap p-5 flex-col md:flex-row items-center">
//   <div>
//     <h1 className='text-[24px] font-[Helvetica] font-bold '>Food<span className='text-[#FF9f0D]'>tuck</span></h1>
//     </div>
//     <nav className="flex lg:w-2/5 flex-wrap justify-between -mr-[50px]   items-center text-base md:ml-auto">
    
//       <Link href={'/'} className="mr-5 text-white ">Home</Link>
//       <Link  href={'/menue'} className="mr-5   text-white ">Menu</Link>
//       <Link  href={'/blog'}className="mr-5  text-white ">Blog</Link>
//       <Link href={'/pages'} className="mr-5  text-white">Pages</Link>
      
//       <Link href={'#about'} className="mr-5 text-white ">About</Link>
      
//       <Link  href={'#shop'}className="mr-5  text-white ">Shop</Link>
//       <Link href={'#contact'} className="mr-5 text-white ">Contact</Link>
//     </nav>
   
//     <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
//     <form className='flex items-center ml-80 justify-end gap-4 bg-black p-2 border-[1px] border-[#FF9f0D] rounded-[27px] flex-1'>
//   <input type='text' placeholder='Search' className='flex-1 justify-end text-white bg-transparent outline-none'/>
//   <button className='cursor-pointer '>
//   <Image
//    src={"/vector.png"}
//    alt='search'
//    width={20}
//    height={20}
//   className='mr-8 size-5  ' />

//   </button>
//  </form>
//  <Bag /></div>
 
//   </div>
// </header>
// <div>
// {/* <h1 className='text-white'>Signup Form</h1> */}
//   <Image src={'/signup.png'} height={410} width={1920}
//   alt='image'  className='text-white'  />
 
// </div>


//     </div>
//   )
// }

// export default ConNavbar


"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex flex-col items-center   p-4 bg-black relative">
            <div className="flex items-center sticky top-0 justify-between w-full">
                <span className="text-yellow-500 font-bold  text-lg flex-grow text-center">
                    Food<span className="text-white">tuck</span>
                </span>
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
                    </button>
                </div>
            </div>

            {/* Main Navigation for Desktop */}
            <div className="hidden md:flex flex-row  items-center justify-around  w-full p-2 transition-all duration-300 ease-in-out">
                <div className="flex items-center space-x-4">
                    <Link href={"/"} className="hover:text-yellow-500 text-white">
                        Home
                    </Link>
                    <Link href={"#ourChefs"} className="hover:text-yellow-500 text-white">
                        cheifs
                    </Link>
                    <Link href={"#menu"} className="hover:text-yellow-500 text-white">
                        Menu
                    </Link>
                    {/* <Link href={"#blog"} className="hover:text-yellow-500 text-white">
                        Blog
                    </Link> */}
                    {/* <Link href={"#checkout"} target='blank' className="hover:text-yellow-500 text-white">
                        Checkout
                    </Link> */}
                     <Link href={"#checkout"} className="hover:text-yellow-500 text-white">
                        Checkout
                    </Link>
                    <Link href={"#error"} className="hover:text-yellow-500 text-white">
                        Page
                    </Link>
                    <Link href={"#about"} className="hover:text-yellow-500 text-white">
                        About
                    </Link>
                    <Link href={"#shop"} className="hover:text-yellow-500 text-white">
                        Shop
                    </Link>
                    <Link href={"#contact"} className="hover:text-yellow-500 text-white">
                        Contact
                    </Link>
                    <Link href={"#signup"} className="hover:text-yellow-500 text-white">
                        Signup
                    </Link>
                    {/* <Link href={"#signin"} className="hover:text-yellow-500 text-white">
                        SignIn
                    </Link> */}
                    {/* <Link href={"#details"} className="hover:text-yellow-500 text-white">
                        BlogDetails
                    </Link> */}

                </div>

                <div className="flex items-center mt-4 md:mt-0">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="pl-4 pr-10 py-2 rounded-full bg-black border border-yellow-500 text-white focus:outline-none" 
                        />
                        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500" />
                    </div>
                    <FaShoppingBag className="ml-4 size-6 mb-3 text-white" />
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden flex flex-col items-center space-y-2 mt-2 transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                <Link href={"#hero"} className="hover:text-yellow-500 text-white">
                    Home
                </Link>
                <Link href={"#menu"} className="hover:text-yellow-500 text-white">
                    Menu
                </Link>
                <Link href={"#blog"} className="hover:text-yellow-500 text-white">
                    Blog
                </Link>
                <Link href={"#pages"} className="hover:text-yellow-500 text-white">
                    Pages
                </Link>
                <Link href={"#about"} className="hover:text-yellow-500 text-white">
                    About
                </Link>
                <Link href={"#shop"} className="hover:text-yellow-500 text-white">
                    Shop
                </Link>
                <Link href={"#contact"} className="hover:text-yellow-500 text-white">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
