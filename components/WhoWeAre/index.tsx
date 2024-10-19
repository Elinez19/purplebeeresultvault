import { FaUserEdit, FaFileArchive, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

interface DataType {
    icon: JSX.Element;
    heading: string;
    paragraph: string;
}

const aboutData: DataType[] = [
    {
        icon: <FaUserEdit size={55} color="orange" />,
        heading: "Real-Time Results",
        paragraph: 'Schools upload and update results in real-time, allowing instant access to records.',
    },
    {
        icon: <FaFileArchive size={55} color="orange" />,
        heading: "Secure Data Storage",
        paragraph: 'All data is protected by state-of-the-art encryption, ensuring privacy and security.',
    },
    {
        icon: <FaChartLine size={55} color="orange" />,
        heading: "Analytics Dashboard",
        paragraph: 'Government officials can view detailed reports on school performance across the state.',
    },
];

const WhoWeAre = () => {
    return (
        <div className="bg-white/50" id="AboutUs">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                {/* Updated h3 and h5 text alignment */}
                <div className="flex justify-between items-center mb-10">
                    <h3 className="text-4xl sm:text-5xl font-semibold text-black text-left w-1/2">
                        About the Ekiti State Result Management System
                    </h3>
                    <h5 className="text-black opacity-60 text-lg font-normal text-left w-1/2">
                        The Ekiti State Result Management System is a centralized platform designed to streamline result compilation, grading, and distribution across secondary schools in Ekiti State. With this system, schools can manage academic records with ease, providing quick access to performance reports for students, parents, and government officials.
                    </h5>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mt-10'>
                    {aboutData.map((item, i) => (
                        <div key={i} className='bg-[#f3ebdd] rounded-sm p-5  border border-white/75'>
                            <div className="flex items-start mb-5"> {/* Icon centered */}
                                {item.icon}
                            </div>
                            {/* Title moved below the icon */}
                            <h3 className="text-2xl font-bold text-black text-left mt-2">{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-50 mt-4'>{item.paragraph}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre;


