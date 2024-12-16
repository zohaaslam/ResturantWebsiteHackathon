// import Image from 'next/image';
// import Link from 'next/link';

// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaPinterest } from "react-icons/fa";


// export default function BlogDetails(){
//     return(
//         <>
//               {/* // Main div  */}
//         <div id='details' className='relative w-[1920px]  text bg-white' >



//                 {/* 2nd div bg-Image */}
//                 <div className='w-[80%]  text-center'>
//                     <Image
//                         src='/signup.png'
//                         alt='bg-pic'
//                         width={800}
//                         height={410}
//                         layout="responsive"
//                     />
//                     <div className='w-full text-white absolute top-40 left-0 items-center px-4 sm:px-8'>
//                         <h1 className='text-3xl  sm:text-5xl -ml-[20%] font-bold'>Blog List</h1>
//                         <h5 className='py-3  -ml-[20%]'>   
//                             <Link href={'#hero'}>Home / </Link>
//                             <span className='text-[#FF9F0D]  '>
//                                 <Link href={'#blog'}>Blog</Link>
//                             </span>
//                         </h5>
//                     </div>
//                 </div>
//             </div>
//               {/* main div */}

//               <div className='w-[1920px] flex -ml-[7%] h-[3450px] bg-white'> 
//                 {/* left side */}
//                 <div className='w-[800px] h-[500px] text-[#4F4F4F] mt-[130px] mx-[300px]'>
//                         <Image 
//                         src='/about2.png'
//                         alt='img'
//                         width={800}
//                         height={500}
//                         />
                      
//                         <div className='flex mt-3'>
//                             <Image
//                                 src='/blogicon1.png'
//                                 alt='icon'
//                                 width={24}
//                                 height={24}
//                                 className='cursor-pointer'
//                             />
//                             <span className='ml-4'>Feb 14, 2022 /</span>
//                             <Image
//                                 src='/blogicon2.png'
//                                 alt='icon'
//                                 width={24}
//                                 height={24}
//                                 className='ml-3 cursor-pointer'
//                             />
//                             <span className='ml-3'>3 /</span>
//                             <Image
//                                 src='/blogicon3.png'
//                                 alt='icon'
//                                 width={24}
//                                 height={24}
//                                 className='ml-4 cursor-pointer'
//                             />
//                             <span className='ml-5'>Admin</span>
//                         </div>
                   
//         <h1 className='font-bold text-2xl w-[504px] h-8  py-[46px] text-[#333333]'>10 Reasons To Do A Digital Detox challenge</h1>
//         <p className='w-[872px] h-[96px] py-[30px] text-[#4F4F4F]'>Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi. Elit praesent cras vehicula a ullamcorper nulla scelerisque aliquet tempus faucibus quam ac aliquet nibh a condimentum suspendisse hac integer leo erat aliquam ut himenaeos.</p>
//         <br/>
//         <p className='w-[872px] h-[96px] py-[30px] text-[#4F4F4F]'>Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.
//  Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat 
// himenaeos nunc torquent euismod adipiscing adipiscing dui gravida justo.</p>


//     <div className='w-[853px] h-[176px] bg-[#FF9F0D] items-center mt-[80px]'>
//         <div className='w-[805px] h-[128px] text-[#4F4F4F] my-10 ml-6'>
//             <Image 
//             src='/blogdetails3.png'
//             alt='img'
//             width={48}
//             height={48}
//             className='mt-[50px]'
//             />
            
//             <p className='w-[700px] text-[#ffff] ml-[50px] text-xl font-bold h-[128px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. </p>
            
            
//         </div>

        
//         <p className='w-[853px] h-[120px] left-0 text-[#4F4F4F]  mt-[100px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                 
//             <div className='w-[853px] flex h-[420px] mt-[60px]'>
//                 {/* ===== */}
//                 <div className='w-[420px] h-[236px]  text-[#4F4F4F] gap-3'>
//                    <p className='w-[420px] gap-2 h-[236px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
//                    <p className='w-[420px] h-[168px] mt-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing </p>
//                 </div>

//                 {/* Image div */}
//                 <div className='ml-4 w-[424px] h-[366px]'>
//                     <Image 
//                     src='/blog3.png'
//                     alt='img'
//                     width={424}
//                     height={366}
//                     />
//                 </div>
//             </div>
//             <p className='w-[872px] h-[120px] mt-20 '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
//             <p className='w-[872px] h-[120px] mt-[50px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>  
//             <Image 
//             src='/line.png'
//             alt='img'
//             width={872}
//             height={60}
//             className='mt-10'
//             />

//             {/* Comment Section */}

//             {/* <div className='w-[872px] h-[472px] mt-10'>
//                 <h1 className='text-2xl font-bold'>Comments - 03</h1>
//                 <div className='w-[872px] h-[472px] mt-10'>
//                     <Image 
//                     src='/'
//                     alt='img'
//                     width={90}
//                     height={112}
//                     className='cursor-pointer'
//                     />

//                     <Image 
//                     src='/'
//                     alt='img'
//                     width={672}
//                     height={112}
//                     className='ml-[200px] mt-5 cursor-pointer'
//                     />
 
//                    <Image 
//                     src='/'
//                     alt='img'
//                     width={872}
//                     height={112}
//                     className='cursor-pointer mt-5'
//                     />
//                 </div>
//             </div>
//               */}
//                {/* Post a comment */}
            
//             <div className='w-[872px] h-[424px] mt-5'>
//                 <h1 className='text-xl border-b-[1px] h-10 border-[#E0E0E0] font-bold'>Post a Comment</h1>
//                 <div className='w-[872px] mt-5 flex h-[80px]'>
//                     <input 
//                     placeholder='Name'
//                     type='name'
//                     className='w-[424px] text-lg text-[#4F4F4F] font-semibold border-[1px] px-3 border-[#E0E0E0] h-[56px]'
//                     />

//                    <input 
//                     placeholder='Email'
//                     type='email'
//                     className='w-[424px] text-lg text-[#4F4F4F] border-[1px] font-semibold px-3 ml-3 border-[#E0E0E0] h-[56px]'
//                     />
//                 </div>
//                 <input 
//                 placeholder='Write a Comment'
//                 type='text'
//                 className='leading-[24px] text-top h-[244px] w-[872px]  text-lg text-[#4F4F4F] border-[1px] font-semibold px-3  border-[#E0E0E0]'
//                 />

//                 <button className='w-[212px] h-[56px] ease-in-out duration-500 bg-[#FF9F0D] hover:bg-[#ffff] hover:text-[#4F4F4F] text-white mt-10'>Post a Comment</button>

//             </div>
//     </div>
              
//                 </div>
                
//                 {/* Right Side */}
//                   {/* Sidebar */}
//                   <div className='w-[300px] -ml-[10%] mt-[40px] border-[1px]  h-[1900px]'>
//         <div className='flex justify-center mt-8 w-[300px]  h-[70px]'>

//             <input 
//             placeholder='Search Your Keyword'
//             type="text"
//             className='w-[200px] h-[40px] px-3 py-3 rounded-sm bg-gray-200 border-lg border-gray-300 '
//             />
//             <div className='w-[50px] ease-in-out duration-500   h-[40px] cursor-pointer justify-center bg-[#FF9F0D]'>     
//            <Image 
//             src='/vector.png'
//             alt='icon'
//             width={24}
//             height={24}
//             className='mt-2 ml-3'
//             />
//             </div>

          

//             </div>

//             <Image 
//             src='/sheif.png'
//             alt='img'
//             width={100}
//             height={100}
//             className='mt-2 ml-24 '
//             />
            
//             <span className='text-black font-extrabold  text-1xl ml-24 -mt-8'>Prince Miyako</span>
//             <div className='text-black   text-1xl ml-16 '>Blogger/Photographer</div>
//             <div className='text-black font-bold mt-4 ml-7 leading-6 mb-5 text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero delectus officia omnis</div>
//             <div className='justify-center mt-8 w-[300px] h-[590px]  border-gray-400'>

//             <h1 className='text-lg w-[200px] font-bold h-[28px] py-5 px-8 '>Recent Posts</h1>
            
//             <div className='flex '>
//                <Image 
//                src='/blog2.png'
//                alt='img'
//                width={90}
//                height={90}
//                className='ml-3 mt-8 rounded-smcursor-pointer'/>
//                <span className='mt-8 ml-2'>Lorem ipsum dolor sit amet.</span>
//                </div>

               
//                <div className='flex '>
//                <Image 
//                src='/egg.png'
//                alt='img'
//                width={90}
//                height={90}
//                className='ml-3 mt-8 rounded-smcursor-pointer'/>
//                <span className='mt-8 ml-2'>Lorem ipsum dolor sit amet.</span>
//                </div>


//                <div className='flex '>
//                <Image 
//                src='/food2.png'
//                alt='img'
//                width={90}
//                height={90}
//                className='ml-3 mt-8 rounded-smcursor-pointer'/>
//                <span className='mt-8 ml-2'>Lorem ipsum dolor sit amet.</span>
//                </div>

//                <div className='flex '>
//                <Image 
//                src='/biryni.png'
//                alt='img'
//                width={80}
//                height={70}
//                className='ml-3 mt-8 rounded-sm cursor-pointer'/>
//                <span className='mt-8 ml-2'>Lorem ipsum dolor sit amet.</span>
//                </div>
//                <div className='flex '>
//                <Image 
//                src='/food1.png'
//                alt='img'
//                width={90}
//                height={90}
//                className='ml-3 mt-8 rounded-smcursor-pointer'/>
//                <span className='mt-8 ml-2'>Lorem ipsum dolor sit amet.</span>
//                </div>
//                <div className='flex '>
//                <Image 
//                src='/coffe.png'
//                alt='img'
//                width={90}
//                height={90}
//                className='ml-3 mt-8 rounded-smcursor-pointer'/>
//                <span className='mt-8 ml-2'>Lorem ipsum dolor sit amet.</span>
//                </div>

//                {/* filter side */}

//             <div className='w-[300px]  mt-[130px] '>
    

//             <h1 className='text-lg w-[200px] h-[28p] py-5 px-5 font-bold'>Filter By Menu</h1>
            
//             <div className='flex '>
//                <Image 
//                src='/burger.png'
//                alt='img'
//                width={90}
//                height={90}
//                className='ml-3 mt-8 rounded-smcursor-pointer'/>
//                <span className='mt-8 ml-2'>burger</span>
//                <span className='ml-24 mt-8'>26</span>
//                </div>

//                <div className='flex '>
//                <Image 
//                src='/coffe.png'
//                alt='img'
//                width={90}
//                height={90}
//                className='ml-3 mt-8 rounded-smcursor-pointer'/>
//                <span className='mt-8 ml-2'>Coffe</span>
//                <span className='ml-28 mt-8'>32</span>
//                </div>


               


//                <div className='flex '>
//                <Image 
//                src='/sign-pic.png'
//                alt='img'
//                width={90}
//                height={90}
//                className='ml-3 mt-8 rounded-smcursor-pointer'/>
//                <span className='mt-8 ml-2'>Nugets</span>
//                <span className='ml-24 mt-8'>43</span>
//                </div>


               
//                <div className='flex '>
//                <Image 
//                src='/blog2.png'
//                alt='img'
//                width={90}
//                height={90}
//                className='ml-3 mt-8 rounded-smcursor-pointer'/>
//                <span className='mt-8 ml-2'>Pizza</span>
//                <span className='ml-28 mt-8'>60</span>
//                </div>

//                <div className='flex '>
//                <Image 
//                src='/blog3.png'
//                alt='img'
//                width={90}
//                height={90}
//                className='ml-3 mt-8 rounded-sm cursor-pointer'/>
//                <span className='mt-8 ml-2'>Noodles.</span>
//                <span className='ml-20 mt-8'>26</span>
//                </div>


//             </div>

//            {/* ======================================== */}

          
                   
    

                
            

//             <div className='mt-10   w-[300px] h-[158px] items-center'>
//                 <div className='w-[308px] mt-[25px] ml-10 h-[94px] items-center cursor-pointer'>
//                   <h1 className='text-3xl ml-4 font-bold'>Follow us</h1>

//                   <div className="flex mt-10  flex-row -ml-28 justify-center gap-4">
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaFacebookF className='size-8' />
//             </div>
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaTwitter  className='size-8' />
//             </div>
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaInstagram  className='size-8' />
//             </div>
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaYoutube  className='size-8' />
//             </div>
//             <div className="bg-white w-9 h-9 flex justify-center  items-center rounded text-black">
//               <FaPinterest  className='size-8' />
//               </div>
//           </div>
//           </div>
            
//             </div>
  
//     </div>
   
// </div>
// </div>
// </>
//     )
// }


import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

export default function BlogDetails() {
  return (
    <div id='details' className="relative bg-white text-gray-700">
      {/* Header with background image */}
      <div className="w-full text-center relative">
        <Image src="/signup.png" alt="bg-pic" width={800} height={410} layout="responsive" />
        <div className="absolute top-1/3 left-0 w-full px-4 sm:px-8 text-white">
          <h1 className="text-3xl sm:text-5xl font-bold">Blog Details</h1>
          <h5 className="py-3">
            <Link href="#hero">Home / </Link>
            <span className="text-[#FF9F0D]">
              <Link href={"#blog"}>Blog</Link>
            </span>
            <span className="text-[#FF9F0D]">
              <Link href={"#blog"}>Blog</Link>
            </span>
          </h5>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse md:flex-row py-8 mx-auto max-w-screen-xl">
        {/* Left side */}
        <div className="w-full md:w-2/3 text-gray-700 px-4">
          <Image src="/about2.png" alt="img" width={800} height={500} className="w-full" />
          <div className="flex mt-3">
            <Image src="/blogicon1.png" alt="icon" width={24} height={24} className="cursor-pointer" />
            <span className="ml-4">Feb 14, 2022 /</span>
            <Image src="/blogicon2.png" alt="icon" width={24} height={24} className="ml-3 cursor-pointer" />
            <span className="ml-3">3 /</span>
            <Image src="/blogicon3.png" alt="icon" width={24} height={24} className="ml-4 cursor-pointer" />
            <span className="ml-5">Admin</span>
          </div>
          <h1 className="font-bold text-2xl mt-6">10 Reasons To Do A Digital Detox Challenge</h1>
          <p className="text-gray-600 mt-4">
            Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse
            potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi.
          </p>
          <p className="text-gray-600 mt-4">
            Ac haca ullamcorper donec ante habitasse donec imperdiet eturpis varius per a augue magna hac.
            Nec hac et vestibulum duis a tincidunt per a aptent interdum purus feugiat a id aliquet erat himenaeos nunc
            torquent euismod adipiscing adipiscing dui gravida justo.
          </p>

          <div className="w-full bg-[#FF9F0D] text-white py-10 mt-8">
            {/* <Image src="/blogdetails3.png" alt="img" width={48} height={48} className="mx-auto" /> */}
            <p className="text-xl font-bold mt-5 text-center w-3/4 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
          </div>

          <p className="text-gray-700 mt-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </p>

          <div className="flex flex-col md:flex-row mt-12">
            <div className="w-full md:w-1/2 text-gray-700">
              <p className="mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <Image src="/blog3.png" alt="img" width={424} height={366} />
            </div>
          </div>

          <p className="text-gray-700 mt-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </p>

          <div className="mt-8">
            <h1 className="text-xl font-bold mb-5">Post a Comment</h1>
            <div className="flex flex-wrap">
              <input placeholder="Name" type="text" className="w-full sm:w-1/2 text-lg text-gray-700 border px-3 py-2 mb-4 sm:mr-3" />
              <input placeholder="Email" type="email" className="w-full sm:w-1/2 text-lg text-gray-700 border px-3 py-2 mb-4 sm:mr-3" />
            </div>
            <textarea placeholder="Write a Comment" className="w-full text-lg text-gray-700 border px-3 py-2 mb-4" />
            <button className="w-full sm:w-1/3 bg-[#FF9F0D] text-white py-3">Post a Comment</button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 px-4">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h1 className="text-lg font-bold mb-5">Search Your Keyword</h1>
            <div className="flex">
              <input placeholder="Search" type="text" className="w-full text-lg text-gray-700 border px-3 py-2" />
              <div className="bg-[#FF9F0D] text-white px-3 py-2 ml-2 cursor-pointer">
                <Image src="/vector.png" alt="search-icon" width={24} height={24} />
              </div>
            </div>
          </div>

          {/* About Author */}
          <div className="text-center mt-10">
            <Image src="/sheif.png" alt="author-img" width={100} height={100} className="mx-auto" />
            <h2 className="font-extrabold text-xl mt-4">Prince Miyako</h2>
            <p className="text-gray-600">Blogger/Photographer</p>
            <p className="mt-4 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero delectus officia omnis.</p>
          </div>

          {/* Recent Posts */}
          <div className="mt-10">
            <h1 className="text-lg font-bold mb-5">Recent Posts</h1>
            <div className="flex flex-col">
              {['Lorem ipsum dolor sit amet.', 'Sed do eiusmod tempor incididunt.', 'Consectetur adipiscing elit.'].map((post, index) => (
                <div key={index} className="flex items-center mb-4">
                  <Image src={`/blog${index + 1}.png`} alt="post-img" width={90} height={90} className="rounded-sm" />
                  <span className="ml-4">{post}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Menu */}
          <div className="mt-10">
            <h1 className="text-lg font-bold mb-5">Filter By Menu</h1>
            <div className="flex items-center mb-4">
              <Image src="/burger.png" alt="menu-item" width={90} height={90} className="rounded-sm" />
              <span className="ml-4">Burger</span>
              <span className="ml-4">26</span>
            </div>
            <div className="flex items-center mb-4">
              <Image src="/coffe.png" alt="menu-item" width={90} height={90} className="rounded-sm" />
              <span className="ml-4">Coffee</span>
              <span className="ml-4">12</span>
            </div>
          </div>
        </div>
      </div>
    
    </div>

  );
}

