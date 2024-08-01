import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const sectionData = [
    {
        title: 'Flexible Class and Subject Management:',
        description: 'Teachers can manage classes,subjects, rating scales, exams, and additional fields flexibly.',
        imgSrc: '/School-Admin-2.jpg',
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
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6" id='Features'>
            {sectionData.map((section, idx) => (
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-6' key={idx}>
                    <div className='col-span-6 flex justify-center order-last lg:order-first'>
                        <Image src={section.imgSrc} alt="Features" width={1000} height={805} />
                    </div>

                    <div className='col-span-6 flex flex-col justify-center'>
                        <h2 className='text-black text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>
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

                        <Link href={'/'} className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0 items-center">
                            Learn more <Image src="/arrow-right.svg" alt="arrow-right" width={20} height={20} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Features;
