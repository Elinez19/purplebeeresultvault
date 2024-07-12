import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const Business = () => {
    const listItems = [
        {
            icon: <FaCheckCircle />,
            text: 'Automated Result Generation',
            subText: 'Streamline result creation with automated processes.'
        },
        {
            icon: <FaCheckCircle />,
            text: 'Secure Access Controls',
            subText: 'Ensure data security with password/PIN-based access.'
        },
        {
            icon: <FaCheckCircle />,
            text: 'Unlimited Result Record Management',
            subText: 'gives your school the best of service in Result Management.'
        },
        {
            icon: <FaCheckCircle />,
            text: 'Flexible and Unlimited Class and Subject Management',
            subText: 'gives your school the best of service in Result Management.'
        },
    ];

    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                <div className='col-span-6 flex justify-center order-last lg:order-first'>
                    <Image src="/images/School-Admin-Add-Teacher.jpg" alt="business" width={1000} height={805} />
                </div>

                <div className='col-span-6 flex flex-col justify-center'>
                    <h2 className='text-black text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'>
                        Effortlessly Manage and Publish Students' results
                    </h2>
                    <h3 className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'>
                        Cut down the time taken for exam evaluations, mark calculation, and report card generation by 90% using PbresultVault Management System. PbresultVault gives flexibility and clarity to your school result regardless of the result format.
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
                        Learn more <Image src="/images/people/arrow-right.svg" alt="arrow-right" width={20} height={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Business;
