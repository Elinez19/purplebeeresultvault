import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Performance/Promotion Management",
        subheading: "The Software promotes or changes class, year, or group with one click. Conditions can be applied when promoting students.",
    },
    {
        heading: "Reduced Workload and Increased Efficiency",
        subheading: "Pbresultvault automates result management, allowing teachers to add subject or class-wise student results efficiently, saving time and reducing workload.",
    },
    {
        heading: "Seamless Students Records Entry",
        subheading: "Pbresultvault provides a user- friendly interface for teachers to easily add and manage marks, enhancing accuracy and efficiency in the grading process.",
    }
]

const Why = () => {
    return (
        <div id="about" className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

                {/* COLUMN-1 */}
                <div className="flex justify-center lg:justify-end">
                    <Image
                        src="/School-Admin-Add-Teacher.jpg"
                        alt="iPad-image"
                        width={4000}
                        height={900}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* COLUMN-2 */}
                <div className="flex flex-col justify-center">
                    <h3 className="text-4xl lg:text-5xl font-semibold sm:leading-tight mt-5 text-center lg:text-left">
                        Why Pbresultvault?
                    </h3>
                    <h4 className="text-lg lg:text-xl font-normal sm:leading-tight text-center lg:text-left text-beach mt-4">
                        Don’t waste time on manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time.
                    </h4>

                    <div className="mt-10 space-y-6">
                        {whydata.map((items, i) => (
                            <div className="flex items-start" key={i}>
                                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-circlebg">
                                    <Image src="/check.svg" alt="check-image" width={24} height={24} />
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
