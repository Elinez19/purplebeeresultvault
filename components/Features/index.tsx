import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const sectionData = [
    {
        title: 'Manage & Push Your School Result To The Next Level',
        description: 'Cut down the time taken for exam evaluations, mark calculation, and report card generation by 90% using PbresultVault Management System. PbresultVault gives flexibility and clarity to your school result regardless of the result format.',
        imgSrc: '/images/School-Admin-Add-Teacher.jpg',
    },
    {
        title: 'Enhance Your School’s Administrative Efficiency',
        description: 'PbresultVault offers comprehensive tools for managing administrative tasks, streamlining operations, and ensuring effective communication within the school.',
        imgSrc: '/images/School-Admin-Add-Teacher.jpg',
    },
    {
        title: 'Ensure Data Security and Privacy',
        description: 'Our system prioritizes the security and privacy of your school’s data, ensuring that sensitive information is protected against unauthorized access.',
        imgSrc: '/images/School-Admin-Add-Teacher.jpg',
    },
    {
        title: 'Provide Better Insights with Data Analytics',
        description: 'Utilize advanced data analytics to gain insights into student performance, helping educators to make informed decisions and improve teaching strategies.',
        imgSrc: '/images/School-Admin-Add-Teacher.jpg',
    },
    {
        title: 'Streamline Student Management',
        description: 'Easily manage student records, attendance, and performance with our user-friendly interface designed for efficient school management.',
        imgSrc: '/images/School-Admin-Add-Teacher.jpg',
    },
    {
        title: 'Simplify Financial Management',
        description: 'Manage school finances, including fee collection and expense tracking, with our integrated financial management tools.',
        imgSrc: '/images/School-Admin-Add-Teacher.jpg',
    }
];

const listItems = [
    {
        icon: <FaCheckCircle />,
        text: 'Flexible result format',
        subText: 'gives your school the best of service in Result Management.'
    },
    {
        icon: <FaCheckCircle />,
        text: 'Efficient mark calculation',
        subText: 'gives your school the best of service in Result Management.'
    },
    {
        icon: <FaCheckCircle />,
        text: 'Quick report card generation',
        subText: 'gives your school the best of service in Result Management.'
    },
    {
        icon: <FaCheckCircle />,
        text: 'Data-driven insights',
        subText: 'gives your school the best of service in Result Management.'
    }
];

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
            {sectionData.map((section, idx) => (
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16' key={idx}>
                    {idx % 2 === 0 ? (
                        <>
                            <div className='col-span-6 flex justify-center'>
                                <Image src={section.imgSrc} alt="Features" width={1000} height={805} />
                            </div>
                            <div className='col-span-6 flex flex-col justify-center'>
                                <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>
                                    {section.title}
                                </h2>
                                <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>
                                    {section.description}
                                </h3>
                                <ul className='pt-4 space-y-2'>
                                    {listItems.map((item, index) => (
                                        <li key={index} className='text-lg font-normal text-black opacity-75'>
                                            <div className='flex items-center'>
                                                <span className="text-purple mr-2">{item.icon}</span>
                                                {item.text}
                                            </div>
                                            <p className='ml-8 text-base opacity-60'>{item.subText}</p>
                                        </li>
                                    ))}
                                </ul>
                                <button className='flex border w-full md:w-auto mt-5 md:mt-0 border-purple justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-purple hover:text-white hover:bg-purple'>
                                    <Link href='#about-section'>Get Pbresultvault</Link>
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='col-span-6 flex flex-col justify-center'>
                                <h2 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>
                                    {section.title}
                                </h2>
                                <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>
                                    {section.description}
                                </h3>
                                <ul className='pt-4 space-y-2'>
                                    {listItems.map((item, index) => (
                                        <li key={index} className='text-lg font-normal text-black opacity-75'>
                                            <div className='flex items-center'>
                                                <span className="text-purple mr-2">{item.icon}</span>
                                                {item.text}
                                            </div>
                                            <p className='ml-8 text-base opacity-60'>{item.subText}</p>
                                        </li>
                                    ))}
                                </ul>
                                <button className='flex border w-full md:w-auto mt-5 md:mt-0 border-purple justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-purple hover:text-white hover:bg-purple'>
                                    <Link href='#about-section'>Get Pbresultvault</Link>
                                </button>
                            </div>
                            <div className='col-span-6 flex justify-center'>
                                <Image src={section.imgSrc} alt="Features" width={1000} height={805} />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Features;
