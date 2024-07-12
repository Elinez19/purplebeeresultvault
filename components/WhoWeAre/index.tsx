import Image from "next/image";
import Link from 'next/link';

interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/images/icon.svg",
        heading: "Seamless Students Records Entry:",
        paragraph: 'Pbresult provides a user- friendly interface for teachers to easily add and manage marks, enhancing accuracy and efficiency in the grading process.',
    },
    {
        imgSrc: "/images/features/signal.svg",
        heading: "Enhanced Record-Keeping",
        paragraph: 'Pbresult offers a secure digital repository, simplifying record-keeping and ensuring easy access to comprehensive archives for compliance and analysis.',
    },
    {
        imgSrc: "/images/features/dollar.svg",
        heading: "Automated Performance Analysis",
        paragraph: 'Pbresultvault provides automated performance analysis, allowing teachers to gain insights into student progress quickly and make informed decisions to support individual learning needs',
    }
]

const WhoWeAre = () => {
    return (
        <div className="bg-white/50" id="WhoWeAre">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">Why PbresultVault.</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center">
                Pbresultvault Management streamlines result management, eliminating tedious <br /> manual processes and providing a secure digital result record.
                </h5>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mt-10'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 shadow-lg border border-white/75'>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                            <h3 className="text-2xl font-semibold text-black mt-5">{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-50 my-2'>{item.paragraph}</h4>
                            <Link href={'/'} className="text-white bg-purple hover:bg-purple transition-all text-xl font-medium py-2 px-4 rounded mt-4 inline-block text-center">
                                Learn more
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre;
