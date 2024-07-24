"use client"
import React from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import Image from 'next/image';

const Provide = () => {
    return (
        <div id="services" className="mx-auto max-w-7xl px-4 my-10">
            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch'>
                    {/* Video Column */}
                    <div className='flex justify-center items-center'>
                        <div className='w-full rounded-3xl bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 p-4 m-4' style={{ height: '500px', width:"1000px" }}>
                            <ReactPlayer 
                                url='https://youtu.be/FqBm5PK9yWE?si=ZEbSNi0to4z2SKzQ' 
                                className='rounded-full' 
                                width='100%' 
                                height='100%' 
                                controls 
                            />
                        </div>
                    </div>

                    {/* Text Content Column */}
                    <div className='flex justify-center items-center'>
                        <div className="flex flex-col align-middle justify-center w-full h-full p-4">
                            <p className="text-4xl lg:text-5xl font-semibold mt-5 text-center lg:text-start">
                            Streamlined Administrative Tasks with Pbresultvault
                            </p>
                            <h4 className="text-lg lg:text-xl pt-4 font-normal text-center lg:text-start text-bluegray">
                            Pbresultvault automates result compilation and record-keeping tasks, providing a seamless, digital platform that streamlines administrative processes, allowing schools to operate more efficiently.
                            </h4>
                            <Link href={'/'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0">
                                Learn more <Image src={'/images/provide/arrow.svg'} alt={'arrow'} width={20} height={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Provide;
