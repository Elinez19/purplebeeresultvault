"use client";
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full p-6 my-10">
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <div className="relative w-[85%] lg:w-[80%] h-0 pb-[85%]">
          <Image 
            src="/commissioner-for-edu.png"  // Replace with your image path
            alt="Testimonial Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-lg"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 mt-6 lg:mt-0 text-center flex flex-col items-center">
        <p className="text-lg text-gray-700 italic max-w-xl">
          “Digitalising the education sector empowers schools with tools to streamline processes, enhance transparency, and improve access to information. It fosters efficiency in managing academic records while enabling real-time insights, ultimately raising the quality of education and preparing students for a technology-driven future."
        </p>
        <p className="mt-4 text-sm text-gray-500">- Dr. (Mrs.) K. O. O. Aderiye</p>
      </div>
    </div>
  );
};

export default Testimonial;
