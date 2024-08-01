import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        link: ['About Us', 'Features', 'Why Pbresultvault', 'Contact Us'],
    },
    {
        id: 2,
        link: ['Support', 'Resources', 'Guides', 'Tutorials']
    }
]

const Footer = () => {
    return (
        <div className="bg-[#4F0166]">
            <div className="mx-auto max-w-2xl pt-1 px-2 sm:px-4 lg:max-w-7xl lg:px-4">
                <div className="my-14 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4 md:col-span-12 lg:col-span-4'>
                        <Image src={'/pbresult-logo.png'} alt="logo" className='pb-10 w-80' width={100} height={100} />
                        <div className='flex gap-4'>
                            <Link href="https://www.facebook.com/purplebeetech" className='fb-icons'>
                                <FaFacebook size={20} className="text-white" />
                            </Link>
                            <Link href="https://x.com/PurpleBeeTech" className='icons'>
                                <FaTwitter size={20} className="text-white" />
                            </Link>
                            <Link href="https://www.instagram.com/purplebeetech/" className='icons'>
                                <FaInstagram size={20} className="text-white" />
                            </Link> 
                        </div>
                    </div>

                    {/* COLUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2 md:col-span-4 lg:col-span-2">
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-white text-base font-normal mb-2 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* COLUMN-4 */}

                    <div className='col-span-4 md:col-span-4 lg:col-span-4'>
                        <div className="flex gap-2">
                            <FaMapMarkerAlt size={24} className="text-white" />
                            <h5 className="text-base font-normal text-offwhite">No 41, Ojido street Beside Ojido market, Ado-Ekiti</h5>
                        </div>
                        <div className="flex gap-2 mt-10">
                            <FaPhone size={24} className="text-white" />
                            <h5 className="text-base font-normal text-offwhite">+2349122205393</h5>
                        </div>
                        <div className="flex gap-2 mt-10">
                            <FaEnvelope size={24} className="text-white" />
                            <h5 className="text-base font-normal text-offwhite">info@purplebeetech.com</h5>
                        </div>
                    </div>

                </div>

                {/* All Rights Reserved */}

                <div className='py-4 lg:flex items-center justify-center border-t border-t-bordertop'>
                    <h4 className='text-offwhite text-sm text-center lg:text-start font-normal'>2024 Pbresultvault. All Rights Reserved by <Link href="https://purplebeetech.com" target="_blank"> Pbresultvault.com</Link></h4>
                    {/* <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                        <div className="h-5 bg-bordertop w-0.5"></div>
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default Footer;
