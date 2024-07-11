import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Quality",
        subheading: "Follow a hashtag growth total posts, videos and images.more revitions",
    },
    {
        heading: "Communication",
        subheading: "Follow a hashtag growth total posts, videos and images.more revitions",
    },
    {
        heading: "Reliability",
        subheading: "Follow a hashtag growth total posts, videos and images.more revitions",
    }
]

const Why = () => {
    return (
        <div id="about" className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

                {/* COLUMN-1 */}
                <div className="flex justify-center lg:justify-end">
                    <Image
                        src="/images/School-Admin-Add-Teacher.jpg"
                        alt="iPad-image"
                        width={4000}
                        height={900}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* COLUMN-2 */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-4xl lg:text-5xl font-semibold sm:leading-tight mt-5 text-center lg:text-left">
                        Why we are the best?
                    </h3>
                    <h4 className="text-lg lg:text-xl font-normal sm:leading-tight text-center lg:text-left text-beach mt-4">
                        Don’t waste time on manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time.
                    </h4>

                    <div className="mt-10 space-y-6">
                        {whydata.map((items, i) => (
                            <div className="flex items-start" key={i}>
                                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-circlebg">
                                    <Image src="/images/why/check.svg" alt="check-image" width={24} height={24} />
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                    <h5 className="text-lg text-beach font-normal mt-2">{items.subheading}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why;
