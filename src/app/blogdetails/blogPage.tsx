



import Image from 'next/image';
import Link from 'next/link';

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function BlogPage() {
    return (
        <>
            {/* Main div */}
            <div id='blog' className='relative w-full text bg-white'>
                {/* 2nd div bg-Image */}
                <div className='w-full  text-center'>
                    <Image
                        src='/signup.png'
                        alt='bg-pic'
                        width={1900}
                        height={410}
                        layout="responsive"
                    />
                    <div className='w-full text-white absolute top-40 left-0 items-center px-4 sm:px-8'>
                        <h1 className='text-3xl  sm:text-5xl font-bold'>Blog List</h1>
                        <h5 className='py-3'>
                            <Link href={'#hero'}>Home / </Link>
                            <span className='text-[#FF9F0D]'>
                                <Link href={'#blog'}>Blog / </Link>
                            </span>
                            <span className='text-white'>
                                <Link href={'#details'}>Blog Details</Link>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>

            {/* Main content section */}
            <div className='w-full bg-white  flex flex-col sm:flex-row py-10'>
                {/* Blog Content */}
                <div className='flex flex-col sm:w-3/5 mx-auto sm:mx-0 sm:px-8'>
                    {/* First Blog Item */}
                    <div className='w-full mb-12'>
                        <Image
                            src='/about2.png'
                            alt='fod-img'
                            width={872}
                            height={520}
                            layout="responsive"
                            className='mt-10'
                        />
                        <div className='flex mt-3'>
                            <Image
                                src='/blogicon1.png'
                                alt='icon'
                                width={24}
                                height={24}
                                className='cursor-pointer'
                            />
                            <span className='ml-4'>Feb 14, 2022 /</span>
                            <Image
                                src='/blogicon2.png'
                                alt='icon'
                                width={24}
                                height={24}
                                className='ml-3 cursor-pointer'
                            />
                            <span className='ml-3'>3 /</span>
                            <Image
                                src='/blogicon3.png'
                                alt='icon'
                                width={24}
                                height={24}
                                className='ml-4 cursor-pointer'
                            />
                            <span className='ml-5'>Admin</span>
                        </div>
                        <h1 className='font-bold text-2xl sm:w-3/4 w-full py-[46px] text-[#333333]'>
                            10 Reasons To Do A Digital Detox challenge
                        </h1>
                        <p className='w-full py-[40px]'>
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                        <button className='w-40 h-[52px] rounded-[6px] border-[1px] py-[14px] px-[32px] text-orange-400 border-orange-400'>
                            Read More
                        </button>
                    </div>

                    {/* Second Blog Item */}
                    <div className='w-full mb-12'>
                        <Image
                            src='/blog2.png'
                            alt=''
                            width={872}
                            height={530}
                            layout="responsive"
                            className='mt-10'
                        />
                        <div className='flex mt-3'>
                            <Image
                                src='/blogicon1.png'
                                alt='icon'
                                width={24}
                                height={24}
                                className='cursor-pointer'
                            />
                            <span className='ml-4'>Feb 14, 2022 /</span>
                            <Image
                                src='/blogicon2.png'
                                alt='icon'
                                width={24}
                                height={24}
                                className='ml-3 cursor-pointer'
                            />
                            <span className='ml-3'>3 /</span>
                            <Image
                                src='/blogicon3.png'
                                alt='icon'
                                width={24}
                                height={24}
                                className='ml-4 cursor-pointer'
                            />
                            <span className='ml-5'>Admin</span>
                        </div>
                        <h1 className='font-bold text-2xl sm:w-3/4 w-full py-[46px] text-[#333333]'>
                            Traditional Soft Pertxels With sweet Beer Cheese
                        </h1>
                        <p className='w-full py-[40px]'>
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                        <button className='w-40 h-[52px] ease-in-out duration-500 rounded-[6px] border-[1px] py-[14px] px-[32px] text-orange-400 border-orange-400'>
                            Read More
                        </button>
                    </div>

                    {/* Third Blog Item */}
                    <div className='w-full mb-12'>
                        <Image
                            src='/blog.png'
                            alt='img'
                            width={872}
                            height={530}
                            layout="responsive"
                            className='mt-10'
                        />
                        <div className='flex mt-3'>
                            <Image
                                src='/blogicon1.png'
                                alt='icon'
                                width={24}
                                height={24}
                                className='cursor-pointer'
                            />
                            <span className='ml-4'>Feb 14, 2022 /</span>
                            <Image
                                src='/blogicon2.png'
                                alt='icon'
                                width={24}
                                height={24}
                                className='ml-3 cursor-pointer'
                            />
                            <span className='ml-3'>3 /</span>
                            <Image
                                src='/blogicon3.png'
                                alt='icon'
                                width={24}
                                height={24}
                                className='ml-4 cursor-pointer'
                            />
                            <span className='ml-5'>Admin</span>
                        </div>
                        <h1 className='font-bold text-2xl sm:w-3/4 w-full py-[46px] text-[#333333]'>
                            The Ultimate Hangover Burger: Egg in a Hole Burger
                        </h1>
                        <p className='w-full py-[40px]'>
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                        <button className='w-40 h-[52px] ease-in-out duration-500 rounded-[6px] border-[1px] py-[14px] px-[32px] text-orange-400 border-orange-400'>
                            Read More
                        </button>
                        <button className='w-40 h-[52px] ease-in-out duration-500 rounded-[6px] border-[1px] py-[14px] px-[32px] text-orange-400 border-orange-400'>
                          <Link href={'#blogdetails'}> Blog Details </Link>
                        </button>
                    </div>
                </div>

                {/* Sidebar */}
                <div className='w-[300px]  mt-[40px] border-[1px]  h-[1900px]'>
        <div className='flex justify-center mt-8 w-[300px]  h-[70px]'>

            <input 
            placeholder='Search Your Keyword'
            type="text"
            className='w-[200px] h-[40px] px-3 py-3 rounded-sm bg-gray-200 border-lg border-gray-300 '
            />
            <div className='w-[50px] ease-in-out duration-500   h-[40px] cursor-pointer justify-center bg-[#FF9F0D]'>     
           <Image 
            src='/vector.png'
            alt='icon'
            width={24}
            height={24}
            className='mt-2 ml-3'
            />
            </div>

          

            </div>

            <Image 
            src='/sheif.png'
            alt='img'
            width={100}
            height={100}
            className='mt-2 ml-24 '
            />
            
            <span className='text-black font-extrabold  text-1xl ml-24 -mt-8'>Prince Miyako</span>
            <div className='text-black   text-1xl ml-16 '>Blogger/Photographer</div>
            <div className='text-black font-bold mt-4 ml-7 leading-6 mb-5 text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero delectus officia omnis</div>
            <div className='justify-center mt-8 w-[300px] h-[590px]  border-gray-400'>

            <h1 className='text-lg w-[200px] font-bold h-[28px] py-5 px-8 '>Recent Posts</h1>
            
            <div className='flex '>
               <Image 
               src='/blog2.png'
               alt='img'
               width={90}
               height={90}
               className='ml-3 mt-8 rounded-smcursor-pointer'/>
               <span className='mt-8 ml-2'>Lorem ipsum dolor sit amet.</span>
               </div>

               
               <div className='flex '>
               <Image 
               src='/egg.png'
               alt='img'
               width={90}
               height={90}
               className='ml-3 mt-8 rounded-smcursor-pointer'/>
               <span className='mt-8 ml-2'>Lorem ipsum dolor sit amet.</span>
               </div>


               <div className='flex '>
               <Image 
               src='/food2.png'
               alt='img'
               width={90}
               height={90}
               className='ml-3 mt-8 rounded-smcursor-pointer'/>
               <span className='mt-8 ml-2'>Lorem ipsum dolor sit amet.</span>
               </div>

               <div className='flex '>
               <Image 
               src='/biryni.png'
               alt='img'
               width={80}
               height={70}
               className='ml-3 mt-8 rounded-sm cursor-pointer'/>
               <span className='mt-8 ml-2'>Lorem ipsum dolor sit amet.</span>
               </div>
               <div className='flex '>
               <Image 
               src='/food1.png'
               alt='img'
               width={90}
               height={90}
               className='ml-3 mt-8 rounded-smcursor-pointer'/>
               <span className='mt-8 ml-2'>Lorem ipsum dolor sit amet.</span>
               </div>
               <div className='flex '>
               <Image 
               src='/coffe.png'
               alt='img'
               width={90}
               height={90}
               className='ml-3 mt-8 rounded-smcursor-pointer'/>
               <span className='mt-8 ml-2'>Lorem ipsum dolor sit amet.</span>
               </div>

               {/* filter side */}

            <div className='w-[300px]  mt-[130px] '>
    

            <h1 className='text-lg w-[200px] h-[28p] py-5 px-5 font-bold'>Filter By Menu</h1>
            
            <div className='flex '>
               <Image 
               src='/burger.png'
               alt='img'
               width={90}
               height={90}
               className='ml-3 mt-8 rounded-smcursor-pointer'/>
               <span className='mt-8 ml-2'>burger</span>
               <span className='ml-24 mt-8'>26</span>
               </div>

               <div className='flex '>
               <Image 
               src='/coffe.png'
               alt='img'
               width={90}
               height={90}
               className='ml-3 mt-8 rounded-smcursor-pointer'/>
               <span className='mt-8 ml-2'>Coffe</span>
               <span className='ml-28 mt-8'>32</span>
               </div>


               


               <div className='flex '>
               <Image 
               src='/sign-pic.png'
               alt='img'
               width={90}
               height={90}
               className='ml-3 mt-8 rounded-smcursor-pointer'/>
               <span className='mt-8 ml-2'>Nugets</span>
               <span className='ml-24 mt-8'>43</span>
               </div>


               
               <div className='flex '>
               <Image 
               src='/blog2.png'
               alt='img'
               width={90}
               height={90}
               className='ml-3 mt-8 rounded-smcursor-pointer'/>
               <span className='mt-8 ml-2'>Pizza</span>
               <span className='ml-28 mt-8'>60</span>
               </div>

               <div className='flex '>
               <Image 
               src='/blog3.png'
               alt='img'
               width={90}
               height={90}
               className='ml-3 mt-8 rounded-sm cursor-pointer'/>
               <span className='mt-8 ml-2'>Noodles.</span>
               <span className='ml-20 mt-8'>26</span>
               </div>


            </div>

           {/* ======================================== */}

          
                   
    

                
            

            <div className='mt-10   w-[300px] h-[158px] items-center'>
                <div className='w-[308px] mt-[25px] ml-10 h-[94px] items-center cursor-pointer'>
                  <h1 className='text-3xl ml-4 font-bold'>Follow us</h1>

                  <div className="flex mt-10  flex-row -ml-28 justify-center gap-4">
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
              <FaFacebookF className='size-8' />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
              <FaTwitter  className='size-8' />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
              <FaInstagram  className='size-8' />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
              <FaYoutube  className='size-8' />
            </div>
            <div className="bg-white w-9 h-9 flex justify-center  items-center rounded text-black">
              <FaPinterest  className='size-8' />
            </div>
          </div>
          </div>
            
            </div>
  
    </div>
   
</div>
</div>
</>
    )
}
