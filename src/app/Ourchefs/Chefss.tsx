

import React from "react";
import Image from "next/image";
import Link from "next/link";







function Header() {
  return (
    <section className='w-full bg-[url("/signup.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            Our Chef
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href={"#ourChefs"} className='text-[#FF9F0D]'>
              Chef
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}



const OurChefs = () => {
  // Array of chefs with their image paths, names, and roles
  const chefs = [
    { name: "Tahmina Rumi", role: "Chef", image: "/chef1.png" },
    { name: "Jorina Begum", role: "Chef", image: "/chef2.png" },
    { name: "M. Mohammad", role: "Chef", image: "/chef3.png" },
    { name: "Munna Kathy", role: "Chef", image: "/chef9.png" },
    { name: "Rahim Baba", role: "Chef", image: "/chef11.png" },
    { name: "Amina Begum", role: "Chef", image: "/chef6.png" },
    { name: "M. Ali", role: "Chef", image: "/chef7.png" },
    { name: "Mam Smith", role: "Chef", image: "/chef8.jpg" },
  ];

  return (
    <section id="ourChefs" className="bg-black py-10 px-6 md:px-20">
           
        
    <section className='w-full bg-[url("/signup.png")] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            Our Chef
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href={"#ourChefs"} className='text-[#FF9F0D]'>
              Chef
            </Link>
          </div>
        </div>
      </div>
    </section>
 









      {/* Section Header */}
      <div className="text-center">
        <h1 className="text-[#FF9F0D] text-2xl md:text-4xl font-greatVibes">Chefs</h1>
        <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h2>
      </div>

      {/* Chef Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
          >
            {/* Chef Image */}
            <Image
              src={chef.image}
              alt={chef.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            {/* Chef Info */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{chef.name}</h3>
              <p className="text-gray-500">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurChefs;
