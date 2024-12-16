 

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Menue: React.FC = () => {
  return (
    <div id="menu" className="bg-white font-sans">
         <section className='w-full bg-[url("/signup.png")] mt-[200px] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            Our Menue
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="#hero" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href={"#menu"} className='text-[#FF9F0D]'>
              Menue
            </Link>
          </div>
        </div>
      </div>
    </section>
   
      <header className="bg-cover bg-center h-48 flex items-center justify-center">
        {/* <Image src={'/signup.png'} height={300} width={1000} alt='img-bg' /> */}
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">Our Menu</h1>
      </header>

      <main className="py-8 md:py-12 -mt-[30px] px-6 md:px-16 lg:px-28">
        {/* Appetizers Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl mb-[24px] font-[Helvetica]  font-semibold text-[#FF9f0D]">Appetizers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between hover:scale-105 transform transition-all duration-300">
              <Image src='/menu2.png' height={400} width={400} alt="Appetizer" className="w-full md:w-[400px] h-[400px] object-cover rounded mb-4 md:mb-0" />
              <div className="md:ml-6 text-center md:text-left">
                <h3 className="text-xl font-medium">Aloo Samosas</h3>
                <p className="text-sm mt-2 text-gray-600">Crispy samosas stuffed with spiced potatoes</p>
              </div>
              <span className="text-lg text-[#FF9f0D] font-medium mt-4 md:mt-0 md:ml-auto">$6.00</span>
            </div>
            {/* Repeat for more appetizers */}
          </div>
        </section>

        {/* Main Course Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Main Course</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between hover:scale-105 transform transition-all duration-300">
              <Image src='/menue1.png' width={600} height={400} alt="Main Course" className="w-full md:w-[400px] h-[400px] object-cover rounded mb-4 md:mb-0" />
              <div className="md:ml-6 text-center md:text-left">
                <h3 className="text-xl font-medium">Grilled Chicken</h3>
                <p className="text-sm text-gray-600 mt-2">Served with roasted vegetables and mashed potatoes</p>
              </div>
              <span className="text-lg text-[#FF9f0D] font-medium mt-4 md:mt-0 md:ml-auto">$12.00</span>
            </div>
            {/* Repeat for more main courses */}
          </div>
        </section>

        {/* Dessert Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Desserts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between hover:scale-105 transform transition-all duration-300">
              <Image src='/menue3.png' height={400} width={400} alt="Dessert" className="w-full md:w-[400px] h-[400px] object-cover rounded mb-4 md:mb-0" />
              <div className="md:ml-6 text-center md:text-left">
                <h3 className="text-xl font-medium">Chocolate Cake</h3>
                <p className="text-sm text-gray-600 mt-2">Rich chocolate cake with a molten center</p>
              </div>
              <span className="text-lg text-[#FF9f0D] font-medium mt-4 md:mt-0 md:ml-auto">$5.00</span>
            </div>
            {/* Repeat for more desserts */}
          </div>
        </section>

        {/* Drinks Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Drinks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between hover:scale-105 transform transition-all duration-300">
              <Image src='/menue4.png' height={400} width={400} alt="Drink" className="w-full md:w-[400px] h-[400px] object-cover rounded mb-4 md:mb-0" />
              <div className="md:ml-6 text-center md:text-left">
                <h3 className="text-xl font-medium">Citrus Lemonade</h3>
                <p className="text-sm text-gray-600 mt-2">Freshly squeezed lemonade with a hint of mint</p>
              </div>
              <span className="text-lg text-[#FF9f0D] font-medium mt-4 md:mt-0 md:ml-auto">$3.50</span>
            </div>
            {/* Repeat for more drinks */}
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="bg-gray-50 py-12 rounded-lg mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6">
            <div>
              <h3 className="text-4xl font-bold">420+</h3>
              <p className="text-sm text-gray-600">Satisfied Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">250+</h3>
              <p className="text-sm text-gray-600">Dishes Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">36+</h3>
              <p className="text-sm text-gray-600">Chefs</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">200+</h3>
              <p className="text-sm text-gray-600">Five Star Ratings</p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">We work with the best people</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 justify-center">
            <Image src='/part8.png' height={120} width={120} alt='Partner1' className="h-[120px] mx-auto" />
            <Image src='/partn5.png' height={120} width={120} alt='Partner2' className="h-[120px] mx-auto" />
            <Image src='/partn7.png' height={120} width={120} alt='Partner3' className="h-[120px] mx-auto" />
            <Image src='/partn3.png' height={120} width={120} alt='Partner4' className="h-[120px] mx-auto" />
            <Image src='/partn4.png' height={100} width={100} alt='Partner5' className="h-[100px] mx-auto" />
          </div>
        </section>
      </main>
    </div>
  );
};



export default Menue
