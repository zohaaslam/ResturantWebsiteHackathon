import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WhyChoose from './WhyChoose'
import Resturant3 from './Resturant3'

const Resturant2 = () => {
  return (
    <div id='hero' className='bg-black'   > 
    
        <div className='h-[2500px] mt-36'>
          
        <div className="text-center sm:text-left">
  {/* Heading Section */}
  <span className="text-[#FF9F0D] text-[32px] font-[400] font-[Great Vibes] sm:text-center sm:ml-10 lg:ml-[600px]">
    Food Category
  </span>
  <div className="flex flex-row items-center sm:text-center sm:ml-10 lg:ml-[600px]">
    <span className="text-[#FF9F0D] font-bold text-2xl font-[Helvetica]">
    Ch
    </span>
    <span className="text-white font-bold text-2xl font-[Helvetica] -mt-1 whitespace-nowrap">
      oose Food Items
    </span>
  </div>

  {/* Images Section */}
  <div className="flex flex-wrap justify-center mt-10 gap-6 px-4 sm:justify-start sm:ml-8">
    <Image
      className="transform transition-transform hover:scale-105"
      src={'/res1.png'}
      height={329}
      width={306}
      alt="img"
    />
    <Image
      className="transform transition-transform hover:scale-105"
      src={'/res2.png'}
      height={329}
      width={306}
      alt="img"
    />
    <Image
      className="transform transition-transform hover:scale-105"
      src={'/res3.png'}
      height={329}
      width={306}
      alt="img"
    />
    <Image
      className="transform transition-transform hover:scale-105"
      src={'/res4.png'}
      height={329}
      width={306}
      alt="img"
    />
  </div>
</div>

         
            <WhyChoose />
            {/* <h1 className='text-[#FF9F0D] ml-[600px] text-[32px] font-[400px]  font-[Great Vibes]  sm:text-center sm:ml-4'>Food Category</h1>
            <h1 className='text-[#FF9F0D] font-bold font-[Helvetica] size-[48px] text-2xl mt-2 ml-[637px]  '>Ch</h1><h1 className='text-white font-bold font-[Helvetica] size-[48px] text-2xl   -mt-[47px] whitespace-nowrap ml-[670px]  '>oose Food Items</h1> 
            


                 {/* Images */}
            {/* <div className='flex flex-row mt-10 ml-20 gap-6 sm:flex-wrap sm:ml-8 ' >
                <Image  className='transform transition-transform hover:scale-105' src={'/res1.png'} height={329}  width={306} alt='img'/>
                <Image className='transform transition-transform hover:scale-105' src={'/res2.png'} height={329}  width={306} alt='img'/>
                <Image className='transform transition-transform hover:scale-105' src={'/res3.png'} height={329}  width={306} alt='img'/>
                <Image  className='transform transition-transform hover:scale-105'src={'/res4.png'} height={329}  width={306} alt='img'/>
            </div>  */} 

            {/* =============================== */}

            {/* <div className='h-[900px] w-[900px] mt-36 '>




             
                 <h1 className='text-[#FF9F0D] whitespace-nowrap text-[26px] ml-[900px] font-[400px] mt-[100px] font-[Great Vibes] sm:text-[18px] '>Why Choose us</h1>
                <h1 className='text-[#FF9F0D] whitespace-nowrap text-[48px] ml-[900px]  font-extrabold mt-[20px]  font-[Great Vibes] '>Ex</h1><h1  className='text-white -mt-[76px]  whitespace-nowrap text-[48px] ml-[963px] font-[400px]  font-[Great Vibes]'>tra Ordinary Taste</h1>
          <h1  className='text-white whitespace-nowrap text-[48px] ml-[890px] font-[400px]  font-[Great Vibes]'>And Experienced</h1>
          <p  className='text-white h-[120px] mt-7 w-[526px] leading-[24px] font-[Inter]  ml-[890px]  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus esse laborum tempora magnam optio at exercitationem totam, facilis harum eius! Expedita nihil facilis porro sed in, culpa dolor accusamus at exercitationem totam, facilis harum eius! Expedita nihil facilis porro sed in, culpa dolor itaque? nihil facilis porro sed</p>
        </div> 
       */}
     {/* Icons============================ */}
          {/* <div className='w-[102px] ml-[890px] -mt-[10%] h-[100px] rounded-[6px] transform transition-transform hover:scale-105 bg-[#FF9F0D]'>
          <Image className='ml-6 pt-5' src={'/resicon1.png'} height={56} width={56} alt='icon-img' />
         
       </div> 
     <span className=' ml-[900px] text-white text-[18px]font-bold'>Food</span>
      
          
          <div className='w-[102px] -mt-[8%]  ml-[1010px] h-[100px] rounded-[6px] transform transition-transform hover:scale-105 bg-[#FF9F0D]'>
         <Image className='ml-5 pt-5' src={'/resicon2.png'} height={56} width={56} alt='icon-img' />
         </div>   <span className=' ml-[1010px] text-white text-[18px]font-bold'>Lunch</span>
   
          
          <div className='w-[102px] -mt-[8%]  ml-[75%] h-[100px] rounded-[6px] transform transition-transform hover:scale-105 bg-[#FF9F0D]'>
         <Image className='ml-5 pt-5' src={'/resicon3.png'} height={56} width={56} alt='icon-img' />
         </div>   <span className=' ml-[75%] text-white text-[18px]font-bold'>Drink</span>  */}
         {/* ======================================= */}

          
          {/* <div className='w-[374px] h-[93px]  ml-[60%] bg-white rounded-t-[6px] transform transition-transform hover:scale-105'>
        <button className='text-[#FF9F0D] text-[48px] ml-9'>30+</button>
        <span className='text-[18px] text-black ml-8'>Years of Experienced</span></div> 
       */}
{/* ======================== */}
 {/* <div className='flex flex-row gap-5 -mt-[40%] '>

          <Image src={'/resimg1.png'} height={200} width={300} alt='img' className=' transform transition-transform hover:scale-105 -mt-[40%] ml-32'/>

          <Image src={'/resimg2.png'} height={200} width={400} alt='img' className=' transform transition-transform hover:scale-105 -mt-[35%]'/> 
         </div>

        <div className='flex flex-row gap-5'>
          <Image src={'/resimg.png'} width={244}  height={306} alt='img' className=' transform transition-transform hover:scale-105 ml-32 mt-5'/>
          <Image src={'/choclate.png'} width={221}  height={226} alt='img' className='transform transition-transform hover:scale-105 mt-5'/> 

          <Image src={'/resimg4.png'} width={221}  height={226} alt='img' className='transform transition-transform hover:scale-105 mt-5'/>
         </div> 
      </div> */}
      </div>
{/* ============================== */}
{/* <div className="flex flex-wrap justify-center gap-10  -mt-[400px]"> */}

  {/* Icon 1 */}
  {/* <div className="flex flex-col items-center -mt-[300px] ">
    <Image src={'/logoicon.png'} height={120} width={120} alt="icon-img" />
    <div className="mt-5 text-center">
      <span className="text-white text-[28px] sm:text-[20px]">Professional Chefs</span><br />
      <span className="text-white text-[24px] sm:text-[20px]">420</span>
    </div>
  </div> */}

  {/* Icon 2 */}
  {/* <div className="flex flex-col items-center -mt-[300px] ">
    <Image src={'/drinkicon.png'} height={120} width={120} alt="icon-img" />
    <div className="mt-5 text-center">
      <span className="text-white text-[28px] sm:text-[20px]">Items of Food</span><br />
      <span className="text-white text-[24px] sm:text-[20px]">320</span>
    </div>
  </div> */}

  {/* Icon 3 */}
  {/* <div className="flex flex-col items-center -mt-[300px]">
    <Image src={'/sponicon.png'} height={120} width={120} alt="icon-img" />
    <div className="mt-5 text-center">
      <span className="text-white text-[28px] sm:text-[20px]">Years of Experience</span><br />
      <span className="text-white text-[24px] sm:text-[20px]">30+</span>
    </div>
  </div> */}

  {/* Icon 4 */}
  {/* <div className="flex flex-col items-center -mt-[300px]">
    <Image src={'/pizaicon.png'} height={120} width={120} alt="icon-img" />
    <div className="mt-5 text-center">
      <span className="text-white text-[28px] sm:text-[20px]">Happy Customers</span><br />
      <span className="text-white text-[24px] sm:text-[20px]">220</span>
    </div>
  </div>

</div> */}


    
 {/* ============================================ */}
        
   
      
 {/* <div className="flex flex-wrap justify-center gap-10 -mt-[400px] sm:mt-[100px] "> */}

{/* Icon 1 */}
{/* <div className="flex flex-col items-center mt-96">
  <Image src={'/logoicon.png'} height={120} width={120} alt="icon-img" />
  <div className="mt-5 text-center">
    <span className="text-white text-[28px] sm:text-[24px] lg:text-[20px]">Professional Chefs</span><br />
    <span className="text-white text-[24px] sm:text-[20px] lg:text-[18px]">420</span>
  </div>
</div> */}

{/* Icon 2 */}
{/* <div className="flex flex-col items-center mt-96">
  <Image src={'/drinkicon.png'} height={120} width={120} alt="icon-img" />
  <div className="mt-5 text-center">
    <span className="text-white text-[28px] sm:text-[24px] lg:text-[20px]">Items of Food</span><br />
    <span className="text-white text-[24px] sm:text-[20px] lg:text-[18px]">320</span>
  </div>
</div> */}

{/* Icon 3 */}
{/* <div className="flex flex-col items-center mt-96">
  <Image src={'/sponicon.png'} height={120} width={120} alt="icon-img" />
  <div className="mt-5 text-center">
    <span className="text-white text-[28px] sm:text-[24px] lg:text-[20px]">Years of Experience</span><br />
    <span className="text-white text-[24px] sm:text-[20px] lg:text-[18px]">30+</span>
  </div>
</div> */}

{/* Icon 4 */}
{/* <div className="flex flex-col items-center mt-96">
  <Image src={'/pizaicon.png'} height={120} width={120} alt="icon-img" />
  <div className="mt-5 text-center">
    <span className="text-white text-[28px] sm:text-[24px] lg:text-[20px]">Happy Customers</span><br />
    <span className="text-white text-[24px] sm:text-[20px] lg:text-[18px]">220</span>
  </div>
</div> */}



     
    

{/* <div className='mt-[20%] '>
              <h1 className='text-[#FF9F0D] justify-center text-center text-[24px] -mt-[60px]'>Cheese & Pick</h1>
              <h1 className='text-white justify-center text-center font-bold font-[Helvetica] ml-40 text-[48px]  '>om Our Menue</h1>
              <h1 className='text-[#FF9F0D] ml-3 mr-60 -mt-[4.8%] justify-center  font-[Helvetica] font-bold text-[48px] text-center  '>Fr</h1>
            </div> */}
            {/* ==================================== */}
            {/* <div className='justify-center text-center flex gap-28 mt-10'>
              <h3 className='text-[#FF9F0D]'>Breakfast</h3>
              <h3 className='text-white'>Lunch</h3>
              <h3 className='text-white'>Dinner</h3>
              <h3 className='text-white'>Desert</h3>
              <h3 className='text-white'>Drink</h3>
              <h3 className='text-white'>Snake</h3>
              <h3 className='text-white'>Soup</h3>
            </div>



             <div className='flex flex-col'>
            <div className='ml-28'>
              <Image src={'/fram.png'} height={406} width={515} className='mt-16' alt='fram'/>
              <Image src={'/plate1.png'} height={362} width={366} className='-mt-[26%] ml-14' alt='img'/>
 </div> */}

 {/* ====================================== */}
 {/* <div className='h-[800px]'>
  <div className='-mt-[30%] ml-[10%]'>
  <div className='justify-center text-center items-center'>
 <Image src={'/img.png'} height={79} width={80} className=' ml-[69%] mt-14' alt='img' />
 <h6 className='text-white -mt-[5%] ml-[54%]'>Lettuce</h6>
 <h6 className='text-white ml-[62%]'>Lorem ipsum, dolor sit  </h6>
 <h6 className='text-[#FF9F0D] ml-[53%]'>12.5$</h6>
 </div> */}


 
 {/* ======================================= */}
 {/* <div className='justify-center text-center items-center'>
 <Image src={'/img.png'} height={79} width={80} className=' ml-[69%] mt-14' alt='img' />
 <h6 className='text-white -mt-[5%] ml-[54%]'>Lettuce</h6>
 <h6 className='text-white ml-[62%]'>Lorem ipsum, dolor sit  </h6>
 <h6 className='text-[#FF9F0D] ml-[53%]'>12.5$</h6>
 </div> */}

 {/* ============================================= */}
 {/* <div className='justify-center text-center items-center'>
 <Image src={'/img.png'} height={79} width={80} className=' ml-[69%] mt-14' alt='img' />
 <h6 className='text-white -mt-[5%] ml-[54%]'>Lettuce</h6>
 <h6 className='text-white ml-[62%]'>Lorem ipsum, dolor sit  </h6>
 <h6 className='text-[#FF9F0D] ml-[53%]'>12.5$</h6>
 </div>
</div>
</div>
 
{/* right img */}
{/* <div className='-mt-[45%]'> */} 
 {/* <div className='justify-center text-center items-center'>
 <Image src={'/img.png'} height={79} width={80} className=' ml-[47%]  -mt-[15%] ' alt='img' />
 <h6 className='text-white -mt-[4%] ml-[9%]'>Lettuce</h6>
 <h6 className='text-white ml-[17%]'>Lorem ipsum, dolor sit  </h6>
 <h6 className='text-[#FF9F0D] ml-[8%]'>12.5$</h6>
 </div>

 <div className='justify-center text-center items-center'>
 <Image src={'/img.png'} height={79} width={80} className=' ml-[47%] -mt-[25%]' alt='img' />
 <h6 className='text-white -mt-[4%] ml-[9%]'>Lettuce</h6>
 <h6 className='text-white ml-[17%]'>Lorem ipsum, dolor sit  </h6>
 <h6 className='text-[#FF9F0D] ml-[8%]'>12.5$</h6>
 </div> */}

 {/* <div className='justify-center text-center items-center -mt-14'>
 <Image src={'/img.png'} height={79} width={80} className=' ml-[47%] mt-[8%] ' alt='img' />
 <h6 className='ditext-white -mt-16 ml-[9%]'>Lettuce</h6>
 <h6 className='text-white ml-[17%]'>Lorem ipsum, dolor sit  </h6>
 <h6 className='text-[#FF9F0D] ml-[8%]'>12.5$</h6>
 </div>
</div>
</div> */}

 {/* ==================CHEF SIDE========================= */}
 
{/* <div className='mt-20 '>
<div className="flex flex-col justify-center items-center">
      <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
      Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
        </div>

        <div className='flex mt-11 gap-8 ml-24'>
          <Image src={'/reschef1.png'} height={391} width={312}  className='transform transition-transform hover:scale-105' alt='img'/>
          <Image src={'/reschef2.png'} height={391} width={312} className='transform transition-transform hover:scale-105' alt='img'/>
          <Image src={'/reschef4.png'} height={391} width={312} className='transform transition-transform hover:scale-105' alt='img'/>
          <Image src={'/reschef5.png'} height={391} width={312} className='transform transition-transform hover:scale-105' alt='img'/>
        </div>
      <div className='justify-center  text-center items-center'>
         <button className='w-[155px] h-[50px] rounded-md border-[1px] border-[#FF9F0D] mt-28 text-white'> <Link href={'/ourChefs'} />Show More </button>
   </div>
 </div> */}




 {/* ======================= */}
 <div className="-mt-[20%] h-[700px] ">
  {/* Header Section */}
  <div className="flex flex-col justify-center items-center">
    <h1 className="text-[24px] md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes whitespace-nowrap">
      Chefs
    </h1>
    <h1 className="text-[20px] md:text-[50px] font-bold text-white text-center whitespace-nowrap md:whitespace-normal">
      <span className="text-[#FF9F0D]">Me</span>et Our Chef
    </h1>
  </div>
</div>
  {/* Images Section */}
  <div className="flex flex-wrap justify-center  -mt-[30%] gap-8">
    <Image
      src="/reschef1.png"
      height={391}
      width={312}
      className="transform transition-transform hover:scale-105"
      alt="img"
    />
    <Image
      src="/reschef2.png"
      height={391}
      width={312}
      className="transform transition-transform hover:scale-105"
      alt="img"
    />
    <Image
      src="/reschef4.png"
      height={391}
      width={312}
      className="transform transition-transform hover:scale-105"
      alt="img"
    />
    <Image
      src="/reschef5.png"
      height={391}
      width={312}
      className="transform transition-transform hover:scale-105"
      alt="img"
    />
  </div>

  {/* Button Section */}
  <div className="flex justify-center items-center text-center">
    <button className="w-[155px] h-[50px] rounded-md border-[1px] border-[#FF9F0D] mt-28 text-white">
      <Link href={"/ourChefs"}>Show More</Link>
    </button>
  </div>
 

   {/* <div className='h-[1800px] mt-48  '>
  <div className='mt-[47px]'>
   <h1 className=' ml-64 font-bold text-[32px] font-[Great Vibes/32] text-[#FF9F0D]'>Testimonials</h1>
   <h1  className=' ml-64 font-bold text-[48px] font-[Great Vibes/32] text-white ' >What our client are saying</h1></div> */}

    {/* <div className='h-[481px] w-[869px] mt-[200px] ml-[326px] bg-white shadow-md'>
      <Image src={'/clientpic.png'} height={134}  width={133} alt='img' className='ml-[370px] '/>
      <Image  className='ml-[420px] pt-[60px]' src={'/quotes.png'} height={48}  width={48} alt='img' />
      <p  className='ml-[130px] pt-4 h-[103.97px] w-[696.57px] 
      text-[#4F4F4F] font-[Helvetica] text-[18px] items-center'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptatum ullam cupiditate non vitae aspernatur laborum aut architecto praesentium! Reiciendis explicabo vitae numquam assumenda cupiditate. Quia facere vel tempora quod!</p>
           */}
      {/* <div className='flex gap-3 ml-[364px] mt-6' >
      <Image src={'/yellstar.png'} height={24} width={24} alt='star'/>
      <Image src={'/yellstar.png'} height={24} width={24} alt='star'/>
      <Image src={'/yellstar.png'} height={24} width={24} alt='star'/>
      <Image src={'/yellstar.png'} height={24} width={24} alt='star'/>
      <Image src={'/graystar.png'} height={24} width={24} alt='star'/> */}

      {/* </div>
      <div className='ml-[364px] mt-5'>
      <h1 className='text-[24px] text-[#333333] font-[Helvetica] font-bold '>Alamin Hasan</h1>
      <h2 className='ml-5 font-extralight'>Food Specialist</h2>
      </div>

    </div> */}

    <Resturant3 />
  





  

<div className='mt-[200px]'>
  <Image src={'/bgpic.png'} height={558} width={1700} alt='pic' />
</div>

<div className='h-[600px]'>
  <div className="flex flex-col justify-center mt-24 items-center">
    <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] whitespace-nowrap font-greatVibes">
      Blog Post
    </h1>
    <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
      <span className="text-[#FF9F0D]">La</span>teset News & Blogs
    </h1>
  </div>
</div>

{/* Responsive Blog Cards Section */}
<div className="flex flex-wrap justify-center -mt-[30%]  gap-8  px-4">
  <div className='h-[560px] w-[90%] sm:w-[48%] md:w-[30%] border-[2px] transform transition-transform hover:scale-105'>
    <Image src={'/img1.png'} height={369} width={423} alt='img' />
    <p className='text-[#FF9F0D] mt-6 font-medium font-[Inter] ml-[10%]'>10 February 2024</p>
    <p className='font-[Helvetica] text-[20px] ml-[10%] font-bold text-[#FFFFFF]'>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
    <p className='font-[Helvetica] font-normal text-[#FFFFFF] ml-[10%] mt-10'>Learn More</p>
    <div className='flex justify-end mr-[10%]  gap-3'>
      <Image src={'/like.png'} height={20} width={20} alt='like' />
      <Image src={'/msg.png'} height={20} width={20} alt='message' />
      <Image src={'/shar.png'} height={20} width={20} alt='share' />
    </div>
  </div>

  <div className='h-[560px] w-[90%] sm:w-[48%] md:w-[30%] border-[2px] transform transition-transform hover:scale-105'>
    <Image src={'/img2.png'} height={369} width={423} alt='img' />
    <p className='text-[#FF9F0D] mt-6 font-medium font-[Inter] ml-[10%]'>10 February 2024</p>
    <p className='font-[Helvetica] text-[20px] ml-[10%] font-bold text-[#FFFFFF]'>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
    <p className='font-[Helvetica] font-normal text-[#FFFFFF] ml-[10%] mt-10'>Learn More</p>
    <div className='flex justify-end mr-[10%] gap-3'>
      <Image src={'/like.png'} height={20} width={20} alt='like' />
      <Image src={'/msg.png'} height={20} width={20} alt='message' />
      <Image src={'/shar.png'} height={20} width={20} alt='share' />
    </div>
  </div>

  <div className='h-[560px] w-[90%] sm:w-[48%] md:w-[30%] border-[2px] transform transition-transform hover:scale-105'>
    <Image src={'/img3.png'} height={369} width={423} alt='img' />
    <p className='text-[#FF9F0D] mt-6 font-medium font-[Inter] ml-[10%]'>10 February 2024</p>
    <p className='font-[Helvetica] text-[20px] ml-[10%] font-bold text-[#FFFFFF]'>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
    <p className='font-[Helvetica] font-normal text-[#FFFFFF] ml-[10%] mt-10'>Learn More</p>
    <div className='flex justify-end mr-[10%]  gap-3'>
      <Image src={'/like.png'} height={20} width={20} alt='like' />
      <Image src={'/msg.png'} height={20} width={20} alt='message' />
      <Image src={'/shar.png'} height={20} width={20} alt='share' />
    </div>
  </div>
</div>


 </div>  
     
  )
}

export default Resturant2





