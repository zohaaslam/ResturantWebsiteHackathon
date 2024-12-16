// import React from 'react'
// import Header from './Header'
// import Navbar from './navbar'
// import Link from 'next/link'

// const Qpage = () => {
//   return (
//     <div id='error' className= 'bg-white'>
//         <Navbar />
//         <Header />
//         <div className=' h-[342px] w-[630px] mt-[60px] ml-[450px] bg-white justify-center text-center items-center '>
//             <h1 className='text-[96px] font-[Helvetica] font-bold leading-[104px] text-[#FF9F0D]'>404</h1>
//             <h5 className='text-[#333333] mt-[20px] font-[Helvetica] font-bold text-[30px] leading-4  '>Oops! Look likes something going wrong</h5>
//             <p className='text#4F4F4F font-[400px] mt-[30px] font-[Inter] items-center '>Page Cannot be found we'll have it figured out in no time</p>
//             <p className='text#4F4F4F font-[400px]  font-[Inter] items-center '>Menwhile, check out these fresh ideas.</p>
            
//             <button className='w-[197px] h-[58px]  cursor-pointer bg-[#FF9F0D] mt-[30px] rounded-md text-white text-[Helvetica]  '><Link href={'#hero'}  > Go to Home</Link></button>
//         </div>
      
//     </div>
//   )
// }

// export default Qpage


import React from 'react'
import Header from './Header'
import Navbar from './navbar'
import Link from 'next/link'

const Qpage = () => {
  return (
    <div id='error' className=  'bg-white h-[1000px]'>
        <Navbar />
        <Header />
        <div className='flex flex-col justify-center items-center mt-[60px] mx-auto bg-white text-center'>
            <h1 className='text-[96px] font-bold leading-[104px] text-[#FF9F0D]'>404</h1>
            <h5 className='text-[#333333]  mt-[20px] font-bold text-[30px] leading-8'>
                Oops! Looks like something went wrong
            </h5>
            <p className='text-[#4F4F4F] font-normal mt-[30px] text-lg'>
                Page cannot be found, well have it figured out in no time.
            </p>
            <p className='text-[#4F4F4F] font-normal text-lg'>
                Meanwhile, check out these fresh ideas.
            </p>
            
            <button className='w-[197px] h-[58px] cursor-pointer bg-[#FF9F0D] mt-[30px] rounded-md text-white text-[16px]'>
                <Link href='#hero'>Go to Home</Link>
            </button>
        </div>
    </div>
  )
}

export default Qpage
