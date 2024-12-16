
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";



// import { PiClockClockwiseBold } from "react-icons/pi";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaPinterest } from "react-icons/fa";




// const Footer = () => {
//   return (
//     <footer className="bg-black dark:bg-black">

//         <div className="flex flex-col md:flex-row justify-between items-center mt-[10px] bg-black px-[135px] py-[50px]">
//           <div className="text-white md:w-[50%] w-[100%]">
//               <h2 className="text-[20px] md:text-[32px] font-semibold"><span className="text-[#FF9F0D]">St</span>ill You  Need Our Support ?</h2>
//               <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">Don&#39;t wait make a smart & logical quote here. Its pretty easy.</p>
//           </div>

//           <div className="flex md:mt-0 mt-[20px]">
//             <input type="text" placeholder="Enter Your Email"
//               className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2"
//             />
//             <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px]">Subscribe Now</button>
//           </div>

          
//         </div>

//           <hr className="my-4 border-[#FF9F0D] mx-[135px]" />

//       <div className="mx-auto w-full max-w-screen-xl ">
//         <div className="grid grid-cols-2  md:gap-[50px] px-0 md:px-[135px] py-6 lg:py-8 md:grid-cols-4">
//           <div>
//             <h2 className="mb-6 text-[24px] font-semibold -ml-[120px] text-white  uppercase dark:text-white">
//               About Us
//             </h2>
//             <ul className="text-gray-500  font-medium">
//               <li className="mb-4">
//                 <p className="text-[#FFFFFF] -ml-[120px] text-[16px] font-normal hover:underline">
//                   orporate clients and leisure travelers has been relying on
//                   Groundlink for dependab safe, and professional chauffeured car
//                   service in major cities across World.
//                 </p>
//               </li>
//               <li className="flex gap-[16.5px]">
//                 <div className="bg-[#FF9F0D] flex justify-center -ml-[120px] items-center w-[72px] h-[72px]">
//                   <PiClockClockwiseBold className="text-white text-[40px]" />
//                 </div>

//                 <div className="ml-1">
//                   <h2 className="text-[16px] text-[#FFFFFF] font-normal">
//                     Opening Houres
//                   </h2>
//                   <h3 className="text-[10px] font-normal text-[#FFFFFF]">
//                     Mon - Sat(8.00 - 6.00)
//                   </h3>
//                   <h3 className="text-[10px] font-normal text-[#FFFFFF]">
//                     Sunday - Closed
//                   </h3>
//                 </div>
//               </li>
//             </ul>
//           </div>
//           <div className="">
//             <h2 className="mb-6 text-[24px] font-semibold text-white uppercase dark:text-white">
//             Useful Links
//             </h2>
//             <ul className="text-gray-500 dark:text-gray-400 font-medium">
//               <li className="mb-4">
//                 <a href="#" className="  text-white hover:underline">
//                   About
//                 </a>
//               </li>
//               <li className="mb-4">
//                 <a href="#" className="  text-white hover:underline">
//                   News
//                 </a>
//               </li>
//               <li className="mb-4">
//                 <a href="#" className="  text-white hover:underline">
//                   Partner
//                 </a>
//               </li>
//               <li className="mb-4">
//                 <a href="#" className="  text-white hover:underline">
//                   Team 
//                 </a>
//               </li>

//               <li className="mb-4">
//                 <a href="#" className="  text-white hover:underline">
//                 Menu
//                 </a>
//               </li> 

//               <li className="mb-4">
//                 <a href="#" className="   text-white hover:underline">
//                 Contact
//                 </a>
//               </li> 
//             </ul>
//           </div>
//           <div className="mt-10 md:mt-0">
//             <h2 className="mb-6 text-[24px] text-white font-semibold  uppercase dark:text-white">
//             Help?
//             </h2>
//             <ul className="text-gray-500 dark:text-gray-400 font-medium">
//               <li className="mb-4">
//                 <a href="#" className="  text-white hover:underline">
//                   FAQ
//                 </a>
//               </li>
//               <li className="mb-4">
//                 <a href="#" className="  text-white hover:underline">
//                 Term & conditions
//                 </a>
//               </li>
//               <li className="mb-4">
//                 <a href="#" className="  text-white hover:underline">
//                 Reporting
//                 </a>
//               </li>
//               <li className="mb-4">
//                 <a href="#" className="  text-white hover:underline">
//                 Documentation 
//                 </a>
//               </li>

//               <li className="mb-4">
//                 <a href="#" className="  text-white hover:underline">
//                 Support Policy
//                 </a>
//               </li> 

//               <li className="mb-4">
//                 <a href="#" className=" text-white hover:underline">
//                 Privacy
//                 </a>
//               </li> 
//             </ul>
//           </div>
//           <div className="mt-10 md:mt-0">
//           <div className="ml-1">
                
//             <h2 className="mb-6 text-[24px] font-semibold text-white  uppercase dark:text-white">
//               Recent Post
//             </h2>
//             <ul className="text-gray-500 dark:text-gray-400 font-medium gap-[14px]">
//               <li className="flex gap-[16.5px]">
             
                 
               
//                <div className="ml-1">
//                  <h2 className="text-[12px] text-[#FFFFFF] font-normal">
//                    20 Feb 2022
//                  </h2>
//                  <h3 className="text-[14px] font-normal text-[#FFFFFF]">
//                    Keep Your Business
//                  </h3>
//                </div>
//              </li>

                 
                 
//               <li className="flex gap-[16.5px] mt-[14px]">
               
//                 <div className="ml-1">
//                   <h2 className="text-[12px] text-[#FFFFFF] font-normal">
//                     20 Feb 2022
//                   </h2>
//                   <h3 className="text-[14px] font-normal text-[#FFFFFF]">
//                     Keep Your Business
//                   </h3>
//                 </div>
//               </li>

//               <li className="flex gap-[16.5px] mt-[14px]">
               

//                 <div className="ml-1">
//                   <h2 className="text-[12px] text-[#FFFFFF] font-normal">
//                     20 Feb 2022
//                   </h2>
//                   <h3 className="text-[14px] font-normal text-[#FFFFFF]">
//                     Keep Your Business
//                   </h3>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="w-[1050px] h-[99px] px-4 py-3 bg-gray-200 flex flex-col items-center justify-between md:flex-row">
//           <span className="text-sm text-black sm:text-center mb-4 md:mb-0">
//             © 2024 Zoha Aslam . All Rights Reserved.
//           </span>

//           <div className="flex justify-center gap-4">
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaFacebookF />
//             </div>
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaTwitter />
//             </div>
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaInstagram />
//             </div>
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaYoutube />
//             </div>
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaPinterest />
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center mt-2 bg-black px-6 md:px-24 py-8">
        <div className="text-white md:w-1/2 w-full">
          <h2 className="text-lg md:text-2xl font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill You Need Our Support ?
          </h2>
          <p className="text-xs md:text-base font-normal mt-4">
            Don&#39;t wait, make a smart & logical quote here. It&#39;s pretty easy.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:mt-0 mt-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-2 px-4 md:py-3 md:px-6 mr-0 md:mr-2 mb-2 md:mb-0"
          />
          <button className="text-[#FF9F0D] bg-white py-2 px-4 md:py-3 md:px-6">
            Subscribe Now
          </button>
        </div>
      </div>

      <hr className="my-4 border-[#FF9F0D] mx-6 md:mx-24" />

      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-6 lg:py-8">
          <div>
            <h2 className="mb-6 text-xl font-semibold text-white uppercase">About Us</h2>
            <p className="text-[#FFFFFF] text-sm font-normal">
              Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
            </p>
            <div className="flex gap-4 mt-4">
              <div className="bg-[#FF9F0D] flex justify-center items-center w-16 h-16">
                <PiClockClockwiseBold className="text-white text-3xl" />
              </div>
              <div>
                <h2 className="text-sm text-white font-normal">Opening Hours</h2>
                <p className="text-xs font-normal text-white">Mon - Sat (8.00 - 6.00)</p>
                <p className="text-xs font-normal text-white">Sunday - Closed</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-xl font-semibold text-white uppercase">Useful Links</h2>
            <ul className="text-gray-500 font-medium space-y-2">
              <li>
                <a href="#" className="text-white hover:underline">About</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">News</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">Partner</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">Team</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">Menu</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-xl font-semibold text-white uppercase">Help?</h2>
            <ul className="text-gray-500 font-medium space-y-2">
              <li>
                <a href="#" className="text-white hover:underline">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">Reporting</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">Support Policy</a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">Privacy</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-xl font-semibold text-white uppercase">Recent Posts</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div>
                  <h2 className="text-sm text-white font-normal">20 Feb 2022</h2>
                  <h3 className="text-base font-normal text-white">Keep Your Business</h3>
                </div>
              </li>
              <li className="flex gap-4">
                <div>
                  <h2 className="text-sm text-white font-normal">20 Feb 2022</h2>
                  <h3 className="text-base font-normal text-white">Keep Your Business</h3>
                </div>
              </li>
              <li className="flex gap-4">
                <div>
                  <h2 className="text-sm text-white font-normal">20 Feb 2022</h2>
                  <h3 className="text-base font-normal text-white">Keep Your Business</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-200 px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-black text-center mb-4 md:mb-0">
            © 2024 Zoha Aslam . All Rights Reserved.
          </span>

          <div className="flex justify-center gap-4">
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
              <FaFacebookF />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
              <FaTwitter />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
              <FaInstagram />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
              <FaYoutube />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
              <FaPinterest />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
