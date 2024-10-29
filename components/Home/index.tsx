"use client";
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

const Home = () => {
  return (
    <div id="About" className="relative bg-white overflow-hidden">
      {/* Background Images */}
      <div className="absolute top-36 left-32 w-[400px] h-[400px] z-10 transform -translate-x-1/2 -translate-y-1/2">
        <Image 
          src="/right-shape.png" 
          alt="Top-left background shape"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-16 right-4 w-[500px] h-[500px] z-10 transform translate-x-1/3 -translate-y-1/3">
        <Image 
          src="/left-shape.png" 
          alt="Top-right background shape"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl pt-20 sm:pb-24 px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:text-left text-center">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-5 text-lightgrey leading-tight sm:leading-snug">
              Ekiti State Schools <span className='text-[#00733d]'>Result Management.</span> 
              </h1>
            </Fade>
            <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
              <p className="text-base sm:text-lg lg:text-xl text-grey font-normal mb-10 leading-relaxed">
                Simplifying academic record-keeping for schools across Ekiti State.<span className="block">
                Ensuring efficient communication between schools, students, and the government.</span>
              </p>
            </Fade>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-[85%] lg:w-[80%] h-0 pb-[85%]">
              <Image 
                src="/Ekiti-State-Governor.png" 
                alt="Feature Image" 
                layout="fill" 
                objectFit="cover" 
                className="absolute inset-0 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
