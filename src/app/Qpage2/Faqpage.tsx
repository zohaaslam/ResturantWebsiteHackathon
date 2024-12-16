






import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Image from 'next/image'

const Faqpage = () => {
  return (
    <div id='faqpage' className='bg-white h-[1900px]'>
        <Navbar />
        <Header />
        <div className='mt-[50px] w-full max-w-screen-lg mx-auto text-center'>
            <h1 className='text-black font-[Helvetica] font-bold text-[48px] leading-[56px]'>Questions Look Here</h1>
            <h5 className='mt-3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit.</h5>
            
            {/* Box 1 */}
            <div className='w-full mt-16'>
                <div className='flex flex-col md:flex-row gap-6 mt-12'>
                    {/* 1st Box */}
                    <div className='w-full md:w-[45%] h-[180px] bg-[#FAF7F2] mx-auto'>
                        <div className='flex justify-between px-4 py-4'>
                            <h1 className='text-black font-bold text-[20px]'>How we serve food?</h1>
                            <Image className='mt-4' src={'/plus.png'} width={50} height={50} alt='plus-img' />
                        </div>
                        <div className='text-black text-[15px] px-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic impedit ipsum maiores iste. Laborum sunt ipsa ducimus, placeat dolores cupiditate facere fugiat alias sit et harum odio ipsam dicta!
                        </div>
                    </div>
                    
                    {/* 2nd Box */}
                    <div className='w-full md:w-[45%] h-[180px] bg-[#FAF7F2] mx-auto'>
                        <div className='flex justify-between px-4 py-4'>
                            <h1 className='text-black font-bold text-[20px]'>How can we get in touch with you?</h1>
                            <Image className='mt-4' src={'/plus.png'} width={50} height={50} alt='plus-img' />
                        </div>
                        <div className='text-black text-[15px] px-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus hic impedit ipsum maiores isteLaborum sunt ipsa ducimus placeat dolores cupiditate facere fugiat alias sit et harum odio ipsam dicta
                        </div>
                    </div>
                </div>

                {/* Box 2 */}
                <div className='flex flex-col md:flex-row gap-6 mt-12'>
                    {/* 3rd Box */}
                    <div className='w-full md:w-[45%] h-[180px] bg-[#FAF7F2] mx-auto'>
                        <div className='flex justify-between px-4 py-4'>
                            <h1 className='text-black font-bold text-[20px]'>How do we give home delivery?</h1>
                            <Image className='mt-4' src={'/plus.png'} width={50} height={50} alt='plus-img' />
                        </div>
                        <div className='text-black text-[15px] px-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic impedit ipsum maiores iste. Laborum sunt ipsa ducimus, placeat dolores cupiditate facere fugiat alias sit et harum odio ipsam dicta!
                        </div>
                    </div>

                    {/* 4th Box */}
                    <div className='w-full md:w-[45%] h-[180px] bg-[#FAF7F2] mx-auto'>
                        <div className='flex justify-between px-4 py-4'>
                            <h1 className='text-black font-bold text-[20px]'>Is this restaurant open 24 hours?</h1>
                            <Image className='mt-4' src={'/plus.png'} width={50} height={50} alt='plus-img' />
                        </div>
                        <div className='text-black text-[15px] px-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic impedit ipsum maiores iste. Laborum sunt ipsa ducimus, placeat dolores cupiditate facere fugiat alias sit et harum odio ipsam dicta!
                        </div>
                    </div>
                </div>

                {/* Box 3 */}
                <div className='flex flex-col md:flex-row gap-6 mt-12'>
                    {/* 5th Box */}
                    <div className='w-full md:w-[45%] h-[180px] bg-[#FAF7F2] mx-auto'>
                        <div className='flex justify-between px-4 py-4'>
                            <h1 className='text-black font-bold text-[20px]'>How is your food quality?</h1>
                            <Image className='mt-4' src={'/plus.png'} width={50} height={50} alt='plus-img' />
                        </div>
                        <div className='text-black text-[15px] px-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic impedit ipsum maiores iste. Laborum sunt ipsa ducimus, placeat dolores cupiditate facere fugiat alias sit et harum odio ipsam dicta!
                        </div>
                    </div>

                    {/* 6th Box */}
                    <div className='w-full md:w-[45%] h-[180px] bg-[#FAF7F2] mx-auto'>
                        <div className='flex justify-between px-4 py-4'>
                            <h1 className='text-black font-bold text-[20px]'>What will be delivered and when?</h1>
                            <Image className='mt-4' src={'/plus.png'} width={50} height={50} alt='plus-img' />
                        </div>
                        <div className='text-black text-[15px] px-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus hic impedit ipsum maiores iste. Laborum sunt ipsa ducimus, placeat dolores cupiditate facere fugiat alias sit et harum odio ipsam dicta!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faqpage
