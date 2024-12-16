// import React from 'react'
// import Header from './Header'
// import Navbar from './Navbar'
// import Image from 'next/image'
// import { CiStar } from "react-icons/ci";


// const Ourshop = () => {
//   return (

//     <>
  
//     <div id='ourshop' className='bg-white h-[2600px]  '>
//         <Navbar />
//         <Header />
       

//        <div className='flex -ml-[190px]'>
       
//         <div className='w-[332px] gap-2 flex  h-[46px] mt-[40px] text-[#333333] ml-[300px]'>
//          <h3 className='text-[15px] mt-1'>Sort By: </h3>
//          <button className='h-[30px] text-[13px] w-[140px] border-[2px] rounded-sm text-black '>Newest   <select className='ml-14'></select></button>
       
//           </div>
//           {/* button 2 */}

//           <div className='w-[332px] gap-2 flex  h-[46px] mt-[40px] text-[#333333] -ml-[120px]'>
//          <h3 className='text-[15px] mt-1'>Show : </h3>
//          <button className='h-[30px] text-[13px] w-[140px] border-[2px] rounded-sm text-black '>Default  <select className='ml-14'></select></button>
       
//           </div>
        
//     </div>  

//     {/* img 1 */}
//     <div className='-ml-[100px]'>
//     <div className='flex flex-row -ml-[90px]'>
//     <div className='ml-[300px]  transform transition-transform hover:scale-105'>
//       <Image  src={'/shop1.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333]  text-[18px] font-bold '>Fresh Lime</h1>
//       {/* <div> */}
//       <span className='  text-[#FF9F0D]'>$38.00</span>
//       <s className= 'text-gray-500 ml-4'>$45.00</s>
//       {/* </div> */}
//     </div>

//     {/* img 2 */}
//     <div className='ml-[40px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/sandwich.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Fresh Lime</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>$38.00</span>
//       <s className='text-gray-500 ml-4'>$45.00</s>
//       {/* </div> */}
//     </div>



//     {/* img 3  */}

//     <div className='ml-[40px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/burger.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Fresh Lime</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>$38.00</span>
//       <s className='text-gray-500 ml-4'>$45.00</s>
//       {/* </div> */}
//     </div>
//     </div>

//     {/* img 4 */}
//     <div className='flex flex-row mt-10  -ml-[90px]'>
//     <div className='ml-[300px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/pizza.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Fresh Lime</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>$38.00</span>
//       <s className='text-gray-500 ml-4'>$45.00</s>
//       {/* </div> */}
//     </div>
//     {/* img 5 */}
//     <div className='ml-[40px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/chiken.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Fresh Lime</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>$38.00</span>
//       <s className='text-gray-500 ml-4'>$45.00</s>
//       {/* </div> */}
//     </div>

//     {/* img 6 */}

//     <div className='ml-[40px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/choclate.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Fresh Lime</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>$38.00</span>
//       <s className='text-gray-500 ml-4'>$45.00</s>
//       {/* </div> */}
//     </div>
//     </div>
//     {/* img 7 */}
    


//  {/* img 4 */}
//  <div className='flex flex-row  -ml-[90px] mt-10'>
//     <div className='ml-[300px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/shop1.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Kabab</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>$38.00</span>
//       <s className='text-gray-500 ml-4'>$45.00</s>
//       {/* </div> */}
//     </div>
//     {/* img 5 */}
//     <div className='ml-[40px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/burger.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Burgur</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>$30.00</span>
//       <s className='text-gray-500 ml-4'>$45.00</s>
//       {/* </div> */}
//     </div>

//     {/* img 6 */}

//     <div className='ml-[40px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/limejuice.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Lime Juice</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>$20.00</span>
//       <s className='text-gray-500 ml-4'>$30.00</s>
//       {/* </div> */}
//     </div>
//     </div>
//     {/* img 7 */}

//     <div className='flex flex-row  -ml-[90px] mt-10'>
//     <div className='ml-[300px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/shop1.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Fresh Food</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>$15.00</span>
//       <s className='text-gray-500 ml-4'>$25.00</s>
//       {/* </div> */}
//     </div>
//     {/* img 5=========================================================================================================== */}
//     <div className='ml-[40px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/pizza.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Pizza</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>$20.00</span>
//       <s className='text-gray-500 ml-4'>$35.00</s>
//       {/* </div> */}
//     </div>

//     {/* img 6 */}

//     <div className='ml-[40px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/burger.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Burger</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>$48.00</span>
//       <s className='text-gray-500 ml-4'>$50.00</s>
//       {/* </div> */}
//     </div>
//     </div>

//     {/* img 6=============================================================================================================== */}

//     <div className='flex flex-row  -ml-[100px] mt-10'>
//     <div className='ml-[300px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/limejuice.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Juice</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>$38.00</span>
//       <s className='text-gray-500 ml-4'>$45.00</s>
//       {/* </div> */}
//     </div>
//     {/* img 5 */}
//     <div className='ml-[40px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/cheese.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Cheese Chiken</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>$38.00</span>
//       <s className='text-gray-500 ml-4'>$45.00</s>
//       {/* </div> */}
//     </div>

//     {/* img 6 */}

//     <div className='ml-[40px]  transform transition-transform hover:scale-105'>
//     <Image  src={'/chiken.png'} width={321} height={267} alt='img' />
//       <h1 className='text-[#333333] text-[18px] font-bold '>Chiken</h1>
//       {/* <div> */}
//       <span className='text-[#FF9F0D]'>50.00</span>
//       <s className='text-gray-500 ml-4'>$65.00</s>
//       {/* </div> */}
//     </div>
//     </div>

// {/* ==================================================Button Sides========================================================================== */}
// <div className='w-[306px] h-[51px] mt-[70px] ml-[600px]'>
//   <button className='h-[50px] w-[50px] text-[#FF9F0D] bg-[#F2F2F2]'>1</button>
//   <button className='h-[50px] w-[50px] bg-[#FF9F0D] text-[#F2F2F2] ml-[20px]'>2</button>


//   <button className='ml-[20px] h-[50px] w-[50px] text-[#FF9F0D] bg-[#F2F2F2]'>3</button>
 


// </div>

// {/* right side ================================= */}
// <div className='w-[312px] ml-[80%] border-[2px] -mt-[118.5%] h-[1900px] '>
// <div className='flex justify-end mt-8 w-[300px] -ml-[30px]  h-[70px]'>

// <input 
// placeholder='Search Your Keyword'
// type="text"
// className='w-[200px] h-[40px] px-3  py-3 rounded-sm bg-gray-200 border-lg border-gray-300 '
// />
// <div className='w-[50px] ease-in-out duration-500   h-[40px] cursor-pointer justify-center bg-[#FF9F0D]'>     
// <Image 
// src='/vector.png'
// alt='icon'
// width={24}
// height={24}
// className='mt-2 ml-3'
// />
// </div>
// </div>
// <div>
//   <h3 className='font-bold text-[20px] ml-[20px]'>Category</h3>

// <div className='ml-[20px] mt-[20px]'>
//   <input className='size-4 mt-1' type='checkbox' /><span className='font-bold  ml-3 text-[18px]'>Sandwiches</span></div>
// </div>
// {/* ==============checkbox2 */}

// <div className='ml-[20px] mt-[20px]'>
//   <input className='size-4 mt-1' type='checkbox' /><span className='font-bold  ml-3 text-[18px]'>Burger</span>
//   <div className='ml-[20px] mt-[20px]'>
//   <input className='size-4 mt-1 -ml-6' type='checkbox' /><span className='font-bold ml-3   text-[18px]'>Chickeb Chup</span>
//   <div className='ml-[20px] mt-[20px]'>
//   <input className='size-4 mt-1 -ml-10' type='checkbox' /><span className='font-bold  ml-3 text-[18px]'>Drink</span></div>
// </div>

// {/* checkobox4========================================= */}
// <div className='ml-[20px] mt-[20px]'>
//   <input className='size-4 mt-1 -ml-5' type='checkbox' /><span className='font-bold  ml-3 text-[18px]'>Pizza</span></div>
// {/* ====================================== */}
// <div className='ml-[20px] mt-[20px]'>
//   <input className='size-4 mt-1 -ml-5' type='checkbox' /><span className='font-bold  ml-3 text-[18px]'>Non Veg</span>
//   <Image className='mt-[30px] -ml-[20px]' src={'/shop2.png'}  height={280}  width={248} alt='img'/>
//   <div className='mt-[30px] '>
//   <h1 className='text-[20px] text-black  font-bold'>Filter By Price</h1>
//   <p className='h-[14px] w-[270px] mt-8 -ml-4 rounded-md bg-[#FF9F0D]'></p>
//   <div className='flex mt-4'>
//   <h5 className='text-[20px] text-gray-400 -ml-5'>From $0 to $8000</h5>
//   <h5 className='text-[20px] text-gray-400 ml-14'>Filter</h5>
//   </div> 
//   {/* ====================================== */}
  
 
//     <h1 className='text-black mt-10  -ml-5 text-[25px]  font-bold'>Latest Products</h1>
//     <div className='flex  '>
//     <Image className='mt-8 -ml-5' src={'/item1.png'} height={80} width={71} alt='img' />
//     <h5 className='mt-7 ml-5 font-bold'>Pasta</h5>
   
//     <CiStar className='mt-16 ml-5 ' />
//     <CiStar className='mt-16 -ml-8' />
//     <CiStar className='mt-16 -ml-8' />
//     <CiStar className='mt-16 text-[rgb(255,159,13)] -ml-8' />
//     <CiStar className='mt-16 -ml-8  text-[rgb(255,159,13)]' />


//     <h5 className='text-gray-400 mt-24 -ml-4 '>$35.00</h5>
 
//  </div>
//  {/* ============================================= */}
//  <div className='flex  '>
//     <Image className='mt-8 -ml-5' src={'/item1.png'} height={80} width={71} alt='img' />
//     <h5 className='mt-7 ml-5 font-bold'>Cookies</h5>
   
//     <CiStar className='mt-16  ' />
//     <CiStar className='mt-16 -ml-8' />
//     <CiStar className='mt-16 -ml-8' />
//     <CiStar className='mt-16 text-[rgb(255,159,13)] -ml-8' />
//     <CiStar className='mt-16 -ml-8  text-[rgb(255,159,13)]' />


//     <h5 className='text-gray-400 mt-24 -ml-4 '>$35.00</h5>
 
//  </div>
//  {/* ================================================= */}
//  <div className='flex  '>
//     <Image className='mt-8 -ml-5' src={'/item1.png'} height={80} width={71} alt='img' />
//     <h5 className='mt-7 ml-5 font-bold whitespace-nowrap'>Chiken Tikka</h5>
   
//     <CiStar className='mt-16 text-[rgb(255,159,13)] -ml-24 ' />
//     <CiStar className='mt-16   text-[rgb(255,159,13)]' />

//     <CiStar className='mt-16   ' />
//     <CiStar className='mt-16 ' />
//     <CiStar className='mt-16 ' />
   

//     <h5 className='text-gray-400 mt-24 -ml-20 '>$35.00</h5>
 
//  </div>
//  {/* ================================================== */}

//  <div className='flex  '>
//     <Image className='mt-8 -ml-5' src={'/item1.png'} height={80} width={71} alt='img' />
//     <h5 className='mt-7 ml-5 font-bold'>Burger</h5>
   
//     <CiStar className='mt-16 ml-5 ' />
//     <CiStar className='mt-16 -ml-8' />
//     <CiStar className='mt-16 -ml-8' />
//     <CiStar className='mt-16 text-[rgb(255,159,13)] -ml-8' />
//     <CiStar className='mt-16 -ml-8  text-[rgb(255,159,13)]' />


//     <h5 className='text-gray-400 mt-24 -ml-4 '>$35.00</h5>
 
//  </div>
//  {/* ======================================================= */}
//  <div className='flex  '>
//     <Image className='mt-8 -ml-5' src={'/item1.png'} height={80} width={71} alt='img' />
//     <h5 className='mt-7 ml-5 font-bold'>Cup Cake</h5>
   

//     <CiStar className='mt-16 text-[rgb(255,159,13)] -ml-14' />
//     <CiStar className='mt-16 -ml-8  text-[rgb(255,159,13)]' />

//     <CiStar className='mt-16 ml-5 ' />
//     <CiStar className='mt-16 ' />
//     <CiStar className='mt-16 ' />
    

//     <h5 className='text-gray-400 mt-24 -ml-20 '>$35.00</h5>
 
//  </div>
//  {/* ============================================= */}
//  <div className='mt-9'>
//  <h1 className='text-black font-bold text-[24px]'>Products Tags</h1>
//  <button className='h-10 w-32 -ml-4 mt-4 bg-gray-100'>Services</button>
//  <button className='h-10 w-32 ml-3 bg-gray-100'>Our Menue</button>
//  <button className='h-10 w-32 -ml-4 mt-4 bg-gray-100'>Pizza</button>
//  <button className='h-10 w-32 ml-3 bg-gray-100'>Burgur</button>
//  <button className='h-10 w-32 -ml-4 mt-4 bg-gray-100'>Cup Cake</button>
//  <button className='h-10 w-32 ml-3 bg-gray-100'>Cookies</button>
//  <button className='h-10 w-32 -ml-4 mt-4 bg-gray-100'>Our Shop</button>
//  <button className='h-10 w-32 ml-3 bg-gray-100'>Tandori Chiken</button>
//  </div>






//  {/* =================================== */}
// </div>
//   </div>
// {/* {/* ================================= */}


  
  
//   </div>
// </div>

// {/* checkbox3==========================*/}






//   </div>
// </div>
// {/* ============================= */}

 

//   </>
   
//   )
// }

// export default Ourshop







import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Image from 'next/image';
import { CiStar } from "react-icons/ci";

const Ourshop = () => {
  return (
    <>
      <div id="ourshop" className="bg-white h-auto">
        <Navbar />
        <Header />

        {/* Sorting and Show Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:ml-0 gap-4 mt-8 px-4">
          <div className="flex gap-2 text-[#333333]">
            <h3 className="text-[15px] mt-1">Sort By:</h3>
            <button className="h-[30px] text-[13px] w-[140px] border-[2px] rounded-sm text-black">
              Newest <select className="ml-2"></select>
            </button>
          </div>
          <div className="flex gap-2 text-[#333333]">
            <h3 className="text-[15px] mt-1">Show:</h3>
            <button className="h-[30px] text-[13px] w-[140px] border-[2px] rounded-sm text-black">
              Default <select className="ml-2"></select>
            </button>
          </div>
        </div>

        {/* Flex container for products and sidebar */}
        <div className="flex flex-col md:flex-row gap-8 px-4 mt-10">
          {/* Products Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 flex-1">
            {/* Product 1 */}
            <div className="transform transition-transform hover:scale-105">
              <Image src={'/shop1.png'} width={321} height={267} alt="img" />
              <h1 className="text-[#333333] text-[18px] font-bold">Fresh Lime</h1>
              <span className="text-[#FF9F0D]">$38.00</span>
              <s className="text-gray-500 ml-4">$45.00</s>
            </div>

            {/* Product 2 */}
            <div className="transform transition-transform hover:scale-105">
              <Image src={'/sandwich.png'} width={321} height={267} alt="img" />
              <h1 className="text-[#333333] text-[18px] font-bold">Fresh Lime</h1>
              <span className="text-[#FF9F0D]">$38.00</span>
              <s className="text-gray-500 ml-4">$45.00</s>
            </div>

            {/* Product 3 */}
            <div className="transform transition-transform hover:scale-105">
              <Image src={'/burger.png'} width={321} height={267} alt="img" />
              <h1 className="text-[#333333] text-[18px] font-bold">Fresh Lime</h1>
              <span className="text-[#FF9F0D]">$38.00</span>
              <s className="text-gray-500 ml-4">$45.00</s>
            </div>

            {/* Product 4 */}
            <div className="transform transition-transform hover:scale-105">
              <Image src={'/pizza.png'} width={321} height={267} alt="img" />
              <h1 className="text-[#333333] text-[18px] font-bold">Fresh Lime</h1>
              <span className="text-[#FF9F0D]">$38.00</span>
              <s className="text-gray-500 ml-4">$45.00</s>
            </div>
            <div className="transform transition-transform hover:scale-105">
              <Image src={'/img2.png'} width={321} height={267} alt="img" />
              <h1 className="text-[#333333] text-[18px] font-bold">Fresh Lime</h1>
              <span className="text-[#FF9F0D]">$38.00</span>
              <s className="text-gray-500 ml-4">$45.00</s>
            </div>
            <div className="transform transition-transform hover:scale-105">
              <Image src={'/burger.png'} width={321} height={267} alt="img" />
              <h1 className="text-[#333333] text-[18px] font-bold">Fresh Lime</h1>
              <span className="text-[#FF9F0D]">$38.00</span>
              <s className="text-gray-500 ml-4">$45.00</s>
            </div>


             {/* Product 5 */}
             <div className="transform transition-transform hover:scale-105">
              <Image src={'/chiken.png'} width={321} height={267} alt="img" />
              <h1 className="text-[#333333] text-[18px] font-bold">Fresh Lime</h1>
              <span className="text-[#FF9F0D]">$38.00</span>
              <s className="text-gray-500 ml-4">$45.00</s>
            </div>
            <div className="transform transition-transform hover:scale-105">
              <Image src={'/sandwich.png'} width={321} height={267} alt="img" />
              <h1 className="text-[#333333] text-[18px] font-bold">Fresh Lime</h1>
              <span className="text-[#FF9F0D]">$38.00</span>
              <s className="text-gray-500 ml-4">$45.00</s>
            </div>

            {/* Product 5 */}
            <div className="transform transition-transform hover:scale-105">
              <Image src={'/burger.png'} width={321} height={267} alt="img" />
              <h1 className="text-[#333333] text-[18px] font-bold">Fresh Lime</h1>
              <span className="text-[#FF9F0D]">$38.00</span>
              <s className="text-gray-500 ml-4">$45.00</s>
            </div>
             {/* Product 5 */}
             <div className="transform transition-transform hover:scale-105">
              <Image src={'/chiken.png'} width={321} height={267} alt="img" />
              <h1 className="text-[#333333] text-[18px] font-bold">Fresh Lime</h1>
              <span className="text-[#FF9F0D]">$38.00</span>
              <s className="text-gray-500 ml-4">$45.00</s>
            </div>

            {/* Product 6 */}
            <div className="transform transition-transform hover:scale-105">
              <Image src={'/choclate.png'} width={321} height={267} alt="img" />
              <h1 className="text-[#333333] text-[18px] font-bold">Fresh Lime</h1>
              <span className="text-[#FF9F0D]">$38.00</span>
              <s className="text-gray-500 ml-4">$45.00</s>
            </div>
             {/* Product 6 */}
             <div className="transform transition-transform hover:scale-105">
              <Image src={'/img2.png'} width={321} height={267} alt="img" />
              <h1 className="text-[#333333] text-[18px] font-bold">Fresh Lime</h1>
              <span className="text-[#FF9F0D]">$38.00</span>
              <s className="text-gray-500 ml-4">$45.00</s>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="w-full lg:w-[312px] border-[2px] mt-8 px-4">
            <div className="flex justify-end mt-8 w-full">
              <input
                placeholder="Search Your Keyword"
                type="text"
                className="w-full lg:w-[200px] h-[40px] px-3 py-3 rounded-sm bg-gray-200 border-lg border-gray-300"
              />
              <div className="w-[50px] h-[40px] bg-[#FF9F0D] cursor-pointer flex justify-center items-center">
                <Image src="/vector.png" alt="icon" width={24} height={24} />
              </div>
            </div>

            <h3 className="font-bold text-[20px] ml-[20px] mt-8">Category</h3>
            <div className="ml-[20px] mt-[20px]">
              <input className="mt-1" type="checkbox" />
              <span className="font-bold ml-3 text-[18px]">Sandwiches</span>
            </div>

            <div className="ml-[20px] mt-[20px]">
              <input className="mt-1" type="checkbox" />
              <span className="font-bold ml-3 text-[18px]">Burger</span>
              <div className="ml-[20px] mt-[20px]">
                <input className="mt-1" type="checkbox" />
                <span className="font-bold ml-3 text-[18px]">Chicken Chup</span>
                <div className="ml-[20px] mt-[20px]">
                  <input className="mt-1" type="checkbox" />
                  <span className="font-bold ml-3 text-[18px]">Drink</span>
                </div>
              </div>
            </div>

            <div className="ml-[20px] mt-[20px]">
              <input className="mt-1" type="checkbox" />
              <span className="font-bold ml-3 text-[18px]">Pizza</span>
            </div>

            <div className="ml-[20px] mt-[20px]">
              <input className="mt-1" type="checkbox" />
              <span className="font-bold ml-3 text-[18px]">Non Veg</span>
            </div>

            <Image className="mt-[30px]" src="/shop2.png" height={280} width={248} alt="img" />

            <div className="mt-[30px]">
              <h1 className="text-[20px] text-black font-bold">Filter By Price</h1>
              <p className="h-[14px] w-[270px] mt-8 rounded-md bg-[#FF9F0D]"></p>
              <div className="flex mt-4">
                <h5 className="text-[20px] text-gray-400">From $0 to $8000</h5>
                <h5 className="text-[20px] text-gray-400 ml-14">Filter</h5>
              </div>
            </div>

            <h1 className="text-black mt-10 text-[25px] font-bold">Latest Products</h1>
            <div className="flex">
              <Image className="mt-8" src="/item1.png" height={100} width={100} alt="img" />
              <div className="mt-8 ml-4">
                <h3 className="text-[18px] text-[#333333]">Chicken Burger</h3>
                <span className="text-[#FF9F0D]">$35.00</span>
              </div>
            </div>

            <div className="flex mt-6">
              <Image className="mt-8" src="/img2.png" height={100} width={100} alt="img" />
              <div className="mt-8 ml-4">
                <h3 className="text-[18px] text-[#333333]">Pizza</h3>
                <span className="text-[#FF9F0D]">$48.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Buttons */}
        <div className="w-full flex justify-center mt-10 gap-4">
          <button className="h-[50px] w-[50px] text-[#FF9F0D] bg-[#F2F2F2]">1</button>
          <button className="h-[50px] w-[50px] bg-[#FF9F0D] text-[#F2F2F2]">2</button>
          <button className="h-[50px] w-[50px] text-[#FF9F0D] bg-[#F2F2F2]">3</button>
        </div>
      </div>
    </>
  );
};

export default Ourshop;
