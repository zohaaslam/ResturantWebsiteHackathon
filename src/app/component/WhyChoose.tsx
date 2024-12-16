// components/WhyChooseUs.jsx

import Image from "next/image";

const WhyChoose = () => {
  return (
    <section className="bg-black h-[1500px] text-white p-8 mt-44">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* Large Image */}
          <div className="col-span-2">
            <Image
              src="/resimg1.png" // Replace with correct path
              alt="Tacos Image"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* Smaller Images */}
          <Image
            src="/resimg2.png"
            alt="Burger Image"
            width={200}
            height={200}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/resimg.png"
            alt="Chicken Image"
            width={200}
            height={200}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/resimg4.png"
            alt="Fries and Burger"
            width={200}
            height={200}
            className="w-full h-auto rounded-lg"
          />
          <Image
            src="/sandwich.png"
            alt="Salad Plate"
            width={200}
            height={200}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex flex-col justify-center ">
          <h3 className="text-[#FF9F0D] italic text-lg mb-2">Why Choose Us</h3>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#FF9F0D]">Ex</span>traordinary Taste And
            Experienced
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          {/* Icon Section */}
          <div className="flex justify-between mb-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FF9F0D] rounded-md flex items-center justify-center">
              <Image src={'/resicon3.png'} height={20}  width={20} className="size-9" alt="icon"/>
              </div>
              <p className="mt-2">Fast Food</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FF9F0D] rounded-md flex items-center justify-center">
              <Image src={'/resicon2.png'} height={20}  width={20} className="size-9" alt="icon"/>
              </div>
              <p className="mt-2">Lunch</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#FF9F0D] rounded-md flex items-center justify-center">
             <Image src={'/resicon1.png'} height={20}  width={20} className="size-9" alt="icon"/>
              </div>
              <p className="mt-2">Dinner</p>
            </div>
          </div>

          {/* Experience Box */}
          <div className="bg-white text-black px-6 py-4 rounded-lg shadow-lg flex items-center justify-between w-full">
            <span className="text-[#FF9F0D] text-3xl font-bold">30+</span>
            <p className="text-gray-700 font-semibold">Years of Experience</p>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default WhyChoose
