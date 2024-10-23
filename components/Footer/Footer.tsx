import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

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
];

const Footer = () => {
    return (
        <div className="bg-[#00733D]">
            <div className="mx-auto max-w-7xl pt-1 px-2 sm:px-4 lg:px-8">
                {/* Main Footer Grid */}
                <div className="my-14 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {/* Column 1: Logo and Description */}
                    <div className="col-span-1">
                        <Image src={'/ekiti-logo1.png'} alt="logo" className='pb-6' width={120} height={100} />
                        <p className="text-white text-base mb-4">
                        EKITI STATE MINISTRY OF EDUCATION
                        </p>
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

                    {/* Column 2 and 3: Footer Links */}
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-white text-base font-normal mb-2 space-links">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Column 4: Image Only */}
                    <div className='col-span-1 flex justify-center'>
                        <Image
                            src={'/ekiti-img.png'}
                            alt="Footer Image"
                            width={280} // Image default width
                            height={80} // Image default height
                            className="w-full max-w-xs lg:max-w-sm rounded-lg" // Responsive width
                        />
                    </div>
                </div>

                {/* Bottom Footer Section */}
                <div className='py-4 lg:flex items-center justify-center border-t border-t-gray-300'>
                    <h4 className='text-white text-sm text-center lg:text-start font-normal'>
                        2024 Pbresultvault. All Rights Reserved by <Link href="https://purplebeetech.com" target="_blank" className="underline">Pbresultvault.com</Link>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;
