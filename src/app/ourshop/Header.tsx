
import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <section className='w-full bg-[url("/signup.png")]  bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            Our Shop
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href={"#hero"} className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home 
            </Link>
            <span className='text-white cursor-pointer'>/</span>
            <Link href={"#error"} className='text-[#FF9F0D]'>
              Shop
            </Link>

            <span className='text-white cursor-pointer'>/</span>
            <Link href={"#shopdetails"} className='text-[#FF9F0D]'>
              Shop Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header