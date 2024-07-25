"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';

const Home = () => {
    return (
        <div id="home-section" className='bg-white'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-8">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                    <div className='col-span-12 lg:col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={0.1} triggerOnce={true}>
                            <h1 className="text-4xl lg:text-6xl font-semibold mb-5 text-lightgrey text-center lg:text-start">
                                Next Level School Result Management Software
                            </h1>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={0.1} triggerOnce={true}>
                            <p className='text-grey text-lg font-normal mb-10 text-center lg:text-start'>
                            Empowering Schools, Teachers, Students, and Parents with Seamless Results Management
                            </p>
                        </Fade>
                        <Fade direction={'up'} delay={1000} cascade damping={0.1} triggerOnce={true}>
                            <div className='flex flex-col md:flex-row items-center justify-center lg:justify-start'>
                                <Link href='#contact'>
                                    <button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-purple lg:px-14 mr-0 md:mr-6 mb-5 md:mb-0'>
                                        Register your School
                                    </button>
                                </Link>
                                <Link href='#about-section'>
                                    <button className='flex border w-full md:w-auto border-purple justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-purple hover:text-white hover:bg-purple'>
                                        Get Pbresultvault
                                    </button>
                                </Link>
                            </div>
                        </Fade>
                    </div>
                    <div className='col-span-12 lg:col-span-6 flex justify-center mt-10 lg:mt-0'>
                        <Image src="/School-Admin.jpg" alt="School Admin" width={1000} height={805} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
