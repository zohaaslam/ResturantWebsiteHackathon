import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import Hero from "./Hero";

export default function Aboutus() {
  return (
    <div id="about">
     <Hero />
      
      {/* Second Section: Content and Buttons */}
      <section className="text-black body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col md:flex-row">
          {/* Left Text (takes 70% width) */}
          <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="mb-4 font-bold text-2xl text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-3xl font-bold mb-6">
              Food is an important
            </p>
            <p className="text-black title-font text-3xl font-bold mb-6">
              part of a balanced Diet
            </p>
            <p className="mb-8 w-[400px] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none rounded-lg text-lg">
                Show More
              </button>
              <button className="ml-4 inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded-lg text-lg">
                <IoPlayOutline className="mr-2 text-white" /> {/* Icon on the left */}
                Watch video
              </button>
            </div>
          </div>

          {/* Right Images (takes 30% width) */}
          <div className="w-full md:w-5/12 flex space-x-3 space-y-4 mt-10 md:mt-0 -ml-[40px]">
  <Image
    className="object-cover object-center w-[280px] h-[280px] rounded-sm" // Adjusted width and height
    alt="hero"
    src={'/about3.png'}
    width={280}
    height={280}
    layout="intrinsic"
  />
  <div className="md:flex md:flex-col mt-10 gap-5">
    <Image
      className="object-cover object-center w-[200px] h-[200px] rounded-lg" // Adjusted width and height
      alt="image2"
      src={'/about2.png'}
      width={200}
      height={200}
      layout="intrinsic"
    />
    <Image
      className="object-center w-[200px] h-[200px] rounded-sm" // Adjusted width and height
      alt="image1"
      src={'/about1.png'}
      width={200}
      height={200}
      layout="intrinsic"
    />
  </div>
  </div>
</div>
</section>


      {/* Third Section: Why Choose Us */}
      <section className="text-black body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <h1 className="text-black text-3xl font-bold mt-3 mb-6 text-center">Why Choose Us</h1>
          <p className="text-center mb-8 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            className="mb-10 object-cover object-center w-full md:w-3/4 lg:w-2/3 h-80 md:h-[400px] rounded-lg"
            alt="Why Choose Us"
            src={'/about4.png'}
            width={1320}
            height={480}
            layout="responsive"
          />
        </div>
      </section>

      {/* Fourth Section: Features */}
      <section className="text-black body-font bg-white">
        <div className="container px-3 py-20 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Feature 1 */}
            <div className="p-4 md:w-1/3">
              <div className="h-[400px] border-2 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-36 md:h-36 w-[200px] h-[200px] mx-auto object-cover object-center"
                  src={'/icon2.png'}
                  alt="120 Item Food"
                  width={100}
                  height={200}
                  layout="intrinsic"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    BEST CHEF
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-4 md:w-1/3">
              <div className="h-[400px] border-2 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-36 md:h-36 w-[200px] h-[200px] mx-auto object-cover object-center"
                  src={'/icon1.png'}
                  alt="120 Item Food"
                  width={100}
                  height={200}
                  layout="intrinsic"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    120 Item Food
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-36 md:h-36 w-[200px] h-[200px] mx-auto object-cover object-center"
                  src={'/icon3.png'}
                  alt="Clean Environment"
                  width={100}
                  height={200}
                  layout="intrinsic"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    Clean Environment
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
