// // import React from 'react'


// // import Image from 'next/image';

// // import Link from 'next/link';






// // const Hero = () => {
// //   return (
// //     <div id='hero'  className='w-full  h-[562px] flex justify-center  bg-black'>
// //         <div className='bg-[#000000] h-full w-[80%] flex justify-between'>
// //       {/* left side */}

// //       <div className='mt-[200px] ml-[120px] '>
// //      <div className='flex justify-center items-center  '>
// //        <span  className='text-2xl w-[249px] h-[40px] text-[#FF9f0D]  mb-6 font-[greatvibes]'>Its Quick & Amazing!</span>
// //         </div>
        
// //         <div className='w-[200px]   '>
// //             <span className='text-[60px] font-[Helvetica]  font-semibold text-white whitespace-nowrap'>The Art of speed</span>
// //             <div className='text-[60px] font-[Helvetica]  font-semibold text-white whitespace-nowrap '>food Quality</div>
          
// //             <div className="max-w-2xl mx-auto">
// //   <p
// //     className=" text-white leading-[24px] w-[418px] text-[16px] font-[Inter] h-[48px]">
// //    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
// //   </p>
// // </div>

// // {/* button see menue */}
// // {/* <div className='w-[190px] h-[60px] rounded-[30px] bg-[#FF9f0D] '> */}
// // <Link href={'#signup'} > <button className=' font-[400px] text-[#E0DFDF] bg-[#FF9f0D] h-[60px] w-[190px] rounded-[30px] mt-9 '>See Menue</button></Link>
// // </div>

// //     </div>
// //       {/* right side */}
// // <div>
// //       <div className='w-[850px] h-[700px] mt-7 ml-[220px] '>
// //       <Image src={'/food.png'} width={633.51} height={624.15} alt='Iphone pic' className='mt-24 ml-32 '  />
// //       </div>
// //       </div>
    
// //     </div>
// //   {/* ====================================================================================== */}

 
// //     </div>
   
  
// //   )
// // }

// // export default Hero
    
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Resturant from './Resturant';


// const Hero = () => {
//   return (
//     <div id='hero' className='w-[1400px] h-auto flex justify-center bg-black'>
//       <div className='bg-[#000000] w-full max-w-screen-xl h-auto flex flex-col lg:flex-row justify-between'>
//         {/* Left Side */}
//         <div className='mt-[50px] lg:mt-[200px] mx-6 lg:mx-[120px] text-center lg:text-left'>
//           <div className='flex justify-center items-center'>
//             <span className='text-2xl w-[249px] mr-[40%] h-[40px] font-[Italic] text-[#FF9f0D] mb-6'>
//  Its Quick And Amazing! 
//             </span>
//           </div>

//           <div>
//             <span className='text-[40px] whitespace-nowrap  lg:text-[60px] font-[Helvetica] font-semibold text-white'>
//               The Art of Speed
//             </span>
//             <div className='text-[40px] lg:text-[60px] font-[Helvetica] font-semibold text-white'>
//               Food Quality
//             </div>

//             <div className='max-w-2xl mx-auto'>
//               <p className='text-white leading-[24px] text-[16px] lg:text-[18px] font-[Inter]'>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa
//                 congue
//               </p>
//             </div>

//             {/* Button See Menu */}
//             <Link href={'#signup'}>
//               <button className='font-[400] text-[#E0DFDF] bg-[#FF9f0D] h-[60px] w-[190px] rounded-[30px] mt-9 mx-auto lg:mx-0'>
//                 See Menu
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className='w-full flex justify-center mt-10 lg:mt-0'>
//           <div className='w-[633px] h-[624px]'>
//             <Image
//               src={'/food.png'}
//               width={633.51}
//               height={624.15}
//               alt='Food Image'
//               className='mt-4 lg:mt-24'
//             />
//           </div>
//         </div>
//         {/* <Resturant /> */}
//       </div>
// {/* ================================================================= */}


//     </div>












  
//     // ===============================================================
   
//   );
// };

// export default Hero;

    
    

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div id='hero' className='w-full h-auto flex justify-center bg-black'>
      <div className='bg-black w-full max-w-screen-xl h-auto flex flex-col lg:flex-row justify-between px-4 lg:px-24 py-10'>
        {/* Left Side */}
        <div className='text-center lg:text-left flex flex-col justify-center items-center lg:items-start'>
          <div className='flex justify-center lg:justify-start items-center'>
            <span className='text-xl lg:text-2xl text-[#FF9F0D] font-[Italic] mb-4'>
              It&apos;s Quick & Amazing!
            </span>
          </div>

          <h1 className='text-4xl lg:text-6xl font-semibold text-white leading-tight'>
            The Art of Speed <br /> Food Quality
          </h1>

          <p className='text-white mt-4 text-sm lg:text-base max-w-lg leading-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
          </p>

          <Link href={'#menu'}>
            <button className='font-medium text-[#E0DFDF] bg-[#FF9F0D] h-[50px] lg:h-[60px] w-[150px] lg:w-[190px] rounded-[25px] lg:rounded-[30px] mt-6'>
              See Menu
            </button>
          </Link>
        </div>

        {/* Right Side */}
        <div className='flex justify-center mt-8 lg:mt-0'>
          <Image
            src={'/food.png'}
            width={633.51}
            height={624.15}
            alt='Food Image'
            className='max-w-full h-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
