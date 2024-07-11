import Image from "next/image";
import Link from "next/link";

const Provide = () => {
    return (
        <div id="services" className="mx-auto max-w-7xl px-4 my-10">
            <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-xl transition-shadow duration-300">
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                    {/* Text Content Column */}
                    <div className='col-span-6 flex justify-center'>
                        <div className="flex flex-col align-middle justify-center">
                            <p className="text-4xl lg:text-5xl pt-4 font-semibold mt-5 text-center lg:text-start">
                                We provide that service.
                            </p>
                            <h4 className="text-lg lg:text-xl pt-4 font-normal text-center lg:text-start text-bluegray">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                            </h4>
                            <Link href={'/'} className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0">
                                Learn more <Image src={'/images/provide/arrow.svg'} alt={'arrow'} width={20} height={20} />
                            </Link>
                        </div>
                    </div>

                    <div className='lg:col-span-1'></div>

                    {/* Image Column */}
                    <div className='col-span-6 lg:col-span-5 flex justify-center items-center'>
                        <Image src="/images/School-Admin-Add-Teacher.jpg" alt="Example Image" width={600} height={600} className="rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Provide;
