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
        heading: "Easy Report Card Generation",
        paragraph: 'Create fully customizable, data-driven, insightful termly report cards from our templates to reduce time taken on manual mark entry process.',
    },
    {
        imgSrc: "/images/features/signal.svg",
        heading: "Mark Entry Made Easy",
        paragraph: 'Our result management system simplifies the process of entering marks by providing an option for all types of mark calculations.',
    },
    {
        imgSrc: "/images/features/dollar.svg",
        heading: "Performance Analysis",
        paragraph: 'Our result system is designed to help school analyze student performance, which enable the teachers support students who might need extra help.',
    }
]

const WhoWeAre = () => {
    return (
        <div className="bg-white/50" id="WhoWeAre">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">Why PbresultVault.</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center">Save time and simplify your school result generation process.<br/> The smart way of generating termly result for your school.</h5>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10'>
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
