


import React from 'react'
import Chefss from './Chefss'

import chef1 from "../../../public/chef1.png";
import chef2 from "../../../public/chef2.png";
import chef3 from "../../../public/chef3.png";
import chef4 from "../../../public/chef9.png";
import chef5 from "../../../public/chef11.png";
import chef6 from "../../../public/chef6.png";
import chef7 from "../../../public/chef7.png";
import chef8  from "../../../public/chef8.jpg";
import chef9  from "../../../public/chef9.png";


import Image from "next/image"
// import Header from '../menue/Header';

const OurChefs = () => {
  return (
    <div>
   <Chefss />
 

      <section className="bg-black md:px-[135px]   py-[50px]">

        <div className="flex flex-col justify-center items-center">
      <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
      Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image src={chef1}  alt="img" className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer"/>
          <Image src={chef2} alt="img" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={chef3} alt="img" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={chef4} alt="img" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={chef5} alt="img" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={chef6} alt="img" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={chef7} alt="img" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={chef8} alt="img" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={chef9} alt="img" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
         
        </div>
      </section>
    </div>
  )
}

export default OurChefs
