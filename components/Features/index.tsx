import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const sectionData = [
    {
        title: 'Manage & Push Your School Result To The Next Level',
        description: 'Cut down the time taken for exam evaluations, mark calculation, and report card generation by 90% using PbresultVault Management System. PbresultVault gives flexibility and clarity to your school result regardless of the result format.',
        imgSrc: '/images/School-Admin-Add-Teacher.jpg',
    },
];

const listItems = [
    {
        icon: <FaCheckCircle />,
        text: 'Interactive Dashboard Portals for All Stakeholders',
        subText: 'Engage parents, students, and teachers with dedicated dashboard portals.'
    },
    {
        icon: <FaCheckCircle />,
        text: 'Student DataBase Management',
        subText: 'Gain actionable insights into academic performance analytics.'
    },
    {
        icon: <FaCheckCircle />,
        text: 'Detailed Analytics and Insights',
        subText: 'Gain actionable insights into academic performance analytics.'
    },
    {
        icon: <FaCheckCircle />,
        text: 'Customizable Result Cards and Reports',
        subText: 'Validate data instantly to maintain accuracy.'
    },
    {
        icon: <FaCheckCircle />,
        text: 'Results Records Management',
        subText: 'Accurate and Error-Free Automated Result Calculations.'
    },
    
];

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
            {sectionData.map((section, idx) => (
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16' key={idx}>
                    <div className={idx % 2 === 0 ? 'col-span-6 flex flex-col justify-center lg:pr-10' : 'col-span-6 flex flex-col justify-center lg:pl-10'}>
                        <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>
                            {section.title}
                        </h2>
                        <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>
                            {section.description}
                        </h3>
                        <ul className='pt-4 space-y-2'>
                            {listItems.map((item, index) => (
                                <li key={index} className='text-lg font-normal text-black opacity-75 lg:text-xl'>
                                    <div className='flex items-center'>
                                        <span className="text-purple mr-2">{item.icon}</span>
                                        {item.text}
                                    </div>
                                    <p className='ml-8 text-base lg:text-lg opacity-60'>{item.subText}</p>
                                </li>
                            ))}
                        </ul>
                        <div className='flex justify-center lg:justify-start mt-6'>
                            <button className='border border-purple rounded-full text-xl font-medium py-3 px-8 text-purple hover:text-white hover:bg-purple'>
                                <Link href='#about-section'>Get Pbresultvault</Link>
                            </button>
                        </div>
                    </div>
                    <div className={idx % 2 === 0 ? 'col-span-6 flex justify-center lg:justify-start' : 'col-span-6 flex justify-center lg:justify-end'}>
                        <Image src={section.imgSrc} alt="Features" width={1000} height={805} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Features;
