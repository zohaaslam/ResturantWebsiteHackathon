// import React from 'react'

// import Image from 'next/image';
// import { FaCheck } from "react-icons/fa";




//   const Resturant = () => {
//   return (
//     <div id='hero'  className='w-[1000px]  h-[1300px] flex justify-center  bg-black'>
//         <div className='bg-[#000000] h-full w-[80%] flex justify-between'>
//       {/* left side */}

//       <div className='mt-[200px] ml-[50px] '>
//      <div className='flex justify-center items-center  '>
//        <span  className='text-2xl w-[249px] h-[40px] text-[#FF9f0D] mb-6 font-[GreatVibes]'>about us</span>
//         </div>
        
//         <div className='w-[200px]   '>
//             <span className='text-[60px] font-[Helvetica]  font-semibold text-white whitespace-nowrap'>We Create the best</span>
//             <div className='text-[60px] font-[Helvetica]  font-semibold text-white whitespace-nowrap '>foody product</div>
          
//             <div className="max-w-2xl mt-11 mx-auto">
//   <p
//     className=" text-white leading-[24px] w-[418px] text-[16px] font-[Inter] h-[48px]">
//    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa conguLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur ore adipisicing elit. Animi sed facere quo quasi tempora facere sit.
//   </p>
//   <div className="flex items-center mt-24 mr-8 max-w-full ">
//   <FaCheck className="text-white text-[20px] ml-0 flex-shrink-0" />
//   <p className="text-[#FFFFFF] ml-2 font-[Inter] font-normal whitespace-nowrap">
//     Lacus nisi, iste facilis aut minus,  nam dolor dolore animi 
//   </p>
// </div>




// <div className="flex items-center mt-4 mr-8 max-w-full ">
//   <FaCheck className="text-white text-[20px] ml-0 flex-shrink-0" />
//   <p className="text-[#FFFFFF] ml-2 font-[Inter] font-normal whitespace-nowrap">
//     Lacus nisi, iste facilis aut minus,  nam dolor dolore animi 
//   </p>
//   </div>

//   <div className="flex items-center mt-4 mr-8 max-w-full ">
//   <FaCheck className="text-white text-[20px] ml-0 flex-shrink-0" />
//   <p className="text-[#FFFFFF] ml-2 font-[Inter] font-normal whitespace-nowrap">
//     Lacus nisi, iste facilis aut minus,  nam dolor dolore animi 
//   </p>
// </div>
  
// </div>

// {/* button see menue */}

// <button className=' font-[400px] text-[#E0DFDF] bg-[#FF9f0D] h-[60px] w-[190px] rounded-[30px] mt-16'>Read More</button>
// </div>

//     </div>
//       {/* right side */}
// <div>
//       <div className='h-[300px] w-[600px] ml-[390px] mt-[150px] '>
//       <Image src={'/egg.png'} width={660} height={330} alt='Iphone pic' className='ml-8 transform transition-transform hover:scale-105 '  />
//       </div>


//       <div className='flex'>
//       <div className='h-[200px] w-[300px] ml-[390px] mt-[15px] '>
//       <Image src={'/food2.png'} width={660} height={330} alt='Iphone pic' className='ml-8 transform transition-transform hover:scale-105 '  />
//       </div>

//       <div className='h-[200px] w-[300px] ml-[14px] mt-[15px] '>
//       <Image src={'/food1.png'} width={660} height={330} alt='Iphone pic' className='ml-8 transform transition-transform hover:scale-105'  />
//       </div>
//       </div>



      
//         </div>
//         {/* =================================================================================================== */}
       
//     </div>
//     </div>
//   )
// }

// export default Resturant


import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const Resturant = () => {
  return (
    <div id="hero" className="w-full flex justify-center bg-black py-10">
      <div className="bg-[#000000] w-full max-w-screen-xl flex flex-col lg:flex-row justify-between items-center px-6 lg:px-12">
        {/* Left Side */}
        <div className="mt-10 lg:mt-[150px] lg:ml-0 text-center lg:text-left lg:w-1/2">
          <div className="flex justify-center lg:justify-start items-center mb-6">
            <span className="text-2xl text-[#FF9f0D] font-[GreatVibes]">
              About Us
            </span>
          </div>

          <div>
            <h1 className="text-[40px] lg:text-[60px] font-[Helvetica] font-semibold text-white leading-tight">
              We Create the Best <br /> Foody Product
            </h1>
            <p className="text-white text-[16px] lg:text-[18px] font-[Inter] leading-6 mt-6 max-w-[500px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi sed facere quo quasi tempora.
            </p>

            {/* Features List */}
            <div className="mt-10 space-y-4">
              {['Lacus nisi, iste facilis aut minus, nam dolor dolore animi', 'Lorem ipsum dolor sit amet consectetur.', 'Varius sed pharetra dictum neque.'].map(
                (item, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheck className="text-white text-[20px]" />
                    <p className="text-[#FFFFFF] ml-2 font-[Inter] font-normal">
                      {item}
                    </p>
                  </div>
                )
              )}
            </div>

            {/* Button */}
            <button className="text-[#E0DFDF] bg-[#FF9f0D] h-[60px] w-[190px] rounded-[30px] mt-10">
              Read More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center lg:w-1/2 mt-10 lg:mt-0">
          {/* Main Image */}
          <div className="w-[90%] lg:w-[660px] mb-5 lg:mb-8">
            <Image
              src="/egg.png"
              width={660}
              height={330}
              alt="Food Image"
              className="transform transition-transform hover:scale-105"
            />
          </div>

          {/* Small Images */}
          <div className="flex justify-center gap-4">
            <div className="w-[45%] lg:w-[300px]">
              <Image
                src="/food2.png"
                width={300}
                height={200}
                alt="Food Image 2"
                className="transform transition-transform hover:scale-105"
              />
            </div>
            <div className="w-[45%] lg:w-[300px]">
              <Image
                src="/food1.png"
                width={300}
                height={200}
                alt="Food Image 3"
                className="transform transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resturant;
