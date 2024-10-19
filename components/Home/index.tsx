"use client";
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

const Home = () => {
  return (
    <div id="About" className='relative bg-white overflow-hidden'>
      {/* Background Images instead of blob shapes */}
      {/* Top-left background image */}
      <div className="absolute top-36 left-32  w-[400px] h-[400px] z-100 transform -translate-x-1/2 -translate-y-1/2">
        <Image 
          src="/right-shape.png"  // Replace with your image path
          alt="Top-left background shape"
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      {/* Top-right background image */}
      <div className="absolute top-16 right-4 w-[500px] h-[500px] z-100 transform translate-x-1/3 -translate-y-1/3">
        <Image 
          src="/left-shape.png"  // Replace with your image path
          alt="Top-right background shape"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl pt-20 sm:pb-24 px-8">
        {/* Text Section */}
        <div className='flex flex-col items-center text-center'>
          <Fade direction={'up'} delay={400} cascade damping={0.1} triggerOnce={true}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-5 text-lightgrey leading-tight sm:leading-snug">
              Empowering Ekiti State Schools with<span className="block">
              Seamless <span className="text-[#00733d]">Result Management.</span></span>
            </h1>
          </Fade>
          <Fade direction={'up'} delay={800} cascade damping={0.1} triggerOnce={true}>
            <p className='text-base sm:text-lg lg:text-xl text-grey font-normal mb-10 leading-relaxed'>
              Simplifying academic record-keeping for schools across Ekiti State.<span className="block">
              Ensuring efficient communication between schools, students, and the government.</span>
            </p>
          </Fade>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <Fade direction={'up'} delay={400} cascade damping={0.1} triggerOnce={true}>
            {/* Card 1 */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-0 pb-[85%]">
                <Image 
                  src="/card-02.png" 
                  alt="Card 1" 
                  layout="fill" 
                  objectFit="cover" 
                  className="absolute inset-0 rounded-lg"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-0 pb-[85%]">
                <Image 
                  src="/card-05.png" 
                  alt="Card 2" 
                  layout="fill" 
                  objectFit="cover" 
                  className="absolute inset-0 rounded-lg"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-0 pb-[85%]">
                <Image 
                  src="/card-03.png" 
                  alt="Card 3" 
                  layout="fill" 
                  objectFit="cover" 
                  className="absolute inset-0 rounded-lg"
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-0 pb-[85%]">
                <Image 
                  src="/card-04.png" 
                  alt="Card 4" 
                  layout="fill" 
                  objectFit="cover" 
                  className="absolute inset-0 rounded-lg"
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Home;
