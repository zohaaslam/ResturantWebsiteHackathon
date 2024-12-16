import React from 'react'
import Image from 'next/image'

const Resturant3 = () => {
  return (
    
    <div className="h-auto mt-48 px-8">
    <div className="text-center">
      <h1 className="font-bold text-4xl text-[#FF9F0D]">Testimonials</h1>
      <h2 className="font-bold text-3xl text-white mt-4">What our clients are saying</h2>
    </div>
  
    <div className="flex justify-center mt-16">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-[90%] lg:w-[869px]">
        <div className="flex flex-col items-center">
          <Image src="/clientpic.png" height={134} width={133} alt="Client Picture" />
          <Image src="/quotes.png" height={48} width={48} alt="Quote Icon" className="mt-6" />
          <p className="text-center text-[#4F4F4F] font-helvetica text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatum ullam
            cupiditate non vitae aspernatur laborum aut architecto praesentium! Reiciendis explicabo
            vitae numquam assumenda cupiditate. Quia facere vel tempora quod!
          </p>
        </div>
  
        <div className="flex justify-center gap-2 mt-6">
          <Image src="/yellstar.png" height={24} width={24} alt="Star Rating" />
          <Image src="/yellstar.png" height={24} width={24} alt="Star Rating" />
          <Image src="/yellstar.png" height={24} width={24} alt="Star Rating" />
          <Image src="/yellstar.png" height={24} width={24} alt="Star Rating" />
          <Image src="/graystar.png" height={24} width={24} alt="Star Rating" />
        </div>
  
        <div className="text-center mt-6">
          <h3 className="text-2xl text-[#333333] font-bold">Alamin Hasan</h3>
          <p className="text-lg text-gray-600">Food Specialist</p>
        </div>
      </div>
    </div>
  </div>
//   -==========================================


)
}

export default Resturant3
