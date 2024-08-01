"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const sectionData = [
    {
        title: 'Comprehensive User Roles (Admin, Teacher, Student)',
        description: 'PbresultVault gives flexibility and clarity to your school result regardless of the result format.',
        imgSrc: '/School-Admin-2.jpg',
    },
];

const listItems = [
    {
        icon: <FaCheckCircle color="purple" />,
        text: 'Different User Roles',
        subText: 'Different user roles provide varying levels of access and functionality tailored to administrative staff, educators, and students.'
    },
    {
        icon: <FaCheckCircle color="purple" />,
        text: 'Detailed Analytics and Insights',
        subText: 'Gain actionable insights into academic performance analytics.'
    },
];

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6" id='Features'>
            {sectionData.map((section, idx) => (
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-6' key={idx}>
                    <div className='col-span-12 lg:col-span-6 flex justify-center order-last lg:order-first'>
                        <Fade direction='left' delay={400} triggerOnce>
                            <Image src={section.imgSrc} alt="Features" width={1000} height={805} />
                        </Fade>
                    </div>

                    <div className='col-span-12 lg:col-span-6 flex flex-col justify-center'>
                        <Fade direction='up' delay={400} cascade damping={0.1} triggerOnce>
                            <h2 className='text-black text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>
                                {section.title}
                            </h2>
                            <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>
                                {section.description}
                            </h3>
                        </Fade>

                        <Fade direction='up' delay={600} cascade damping={0.1} triggerOnce>
                            <ul className='pt-4 space-y-2'>
                                {listItems.map((item, index) => (
                                    <li key={index} className='text-lg font-normal text-black opacity-75'>
                                        <div className='flex items-center'>
                                            <span className="mr-2">{item.icon}</span>
                                            {item.text}
                                        </div>
                                        <p className='ml-8 text-base opacity-60'>{item.subText}</p>
                                    </li>
                                ))}
                            </ul>
                        </Fade>

                        <Fade direction='up' delay={800} triggerOnce>
                            <Link href={'/'} className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0 items-center">
                                Learn more <Image src="/arrow-right.svg" alt="arrow-right" width={20} height={20} />
                            </Link>
                        </Fade>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Features;
