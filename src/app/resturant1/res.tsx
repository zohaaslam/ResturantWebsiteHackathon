import React from 'react'

import Image from 'next/image';
import { FaCheck } from "react-icons/fa";








const Home = () => {
  return (
    <div   className='w-[1320px]   h-[562px] flex justify-center  bg-black'>
        <div className='bg-[#000000] h-full w-[80%] flex justify-between'>
      {/* left side */}

      <div className='mt-[200px] ml-[50px] '>
     <div className='flex justify-center items-center  '>
       <span  className='text-2xl w-[249px] h-[40px] text-[#FF9f0D] mb-6 font-[GreatVibes]'>about us</span>
        </div>
        
        <div className='w-[200px]   '>
            <span className='text-[60px] font-[Helvetica]  font-semibold text-white whitespace-nowrap'>We Create the best</span>
            <div className='text-[60px] font-[Helvetica]  font-semibold text-white whitespace-nowrap '>foody product</div>
          
            <div className="max-w-2xl mt-11 mx-auto">
  <p
    className=" text-white leading-[24px] w-[418px] text-[16px] font-[Inter] h-[48px]">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa conguLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur ore adipisicing elit. Animi sed facere quo quasi tempora facere sit.
  </p>
  <div className="flex items-center mt-24 mr-8 max-w-full ">
  <FaCheck className="text-white text-[20px] ml-0 flex-shrink-0" />
  <p className="text-[#FFFFFF] ml-2 font-[Inter] font-normal whitespace-nowrap">
    Lacus nisi, iste facilis aut minus,  nam dolor dolore animi 
  </p>
</div>




<div className="flex items-center mt-4 mr-8 max-w-full ">
  <FaCheck className="text-white text-[20px] ml-0 flex-shrink-0" />
  <p className="text-[#FFFFFF] ml-2 font-[Inter] font-normal whitespace-nowrap">
    Lacus nisi, iste facilis aut minus,  nam dolor dolore animi 
  </p>
  </div>

  <div className="flex items-center mt-4 mr-8 max-w-full ">
  <FaCheck className="text-white text-[20px] ml-0 flex-shrink-0" />
  <p className="text-[#FFFFFF] ml-2 font-[Inter] font-normal whitespace-nowrap">
    Lacus nisi, iste facilis aut minus,  nam dolor dolore animi 
  </p>
</div>
  
</div>

{/* button see menue */}

<button className=' font-[400px] text-[#E0DFDF] bg-[#FF9f0D] h-[60px] w-[190px] rounded-[30px] mt-16'>Read More</button>
</div>

    </div>
      {/* right side */}
<div>
      <div className='h-[300px] w-[600px] ml-[390px] mt-[150px] '>
      <Image src={'/egg.png'} width={660} height={330} alt='Iphone pic' className='ml-8 '  />
      </div>


      <div className='flex'>
      <div className='h-[200px] w-[300px] ml-[390px] mt-[15px] '>
      <Image src={'/food2.png'} width={660} height={330} alt='Iphone pic' className='ml-8 '  />
      </div>

      <div className='h-[200px] w-[300px] ml-[14px] mt-[15px] '>
      <Image src={'/food1.png'} width={660} height={330} alt='Iphone pic' className='ml-8 '  />
      </div>
      </div>



      </div>
    </div>
    </div>
  )
}

export default Home
