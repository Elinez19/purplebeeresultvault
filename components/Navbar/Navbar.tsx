import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import fileDownload from 'react-file-download';
import Image from 'next/image';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About Us', href: '/', current: true },
    { name: 'Features', href: '#Features', current: false },
    { name: 'Benefits', href: '#Benefits', current: false },
    { name: 'How it Works', href: '#HowItWorks', current: false },
];

const drawerNavigation: NavigationItem[] = [
    { name: 'About Us', href: '/', current: true },
    { name: 'Features', href: '#Features', current: false },
    { name: 'Benefits', href: '#Benefits', current: false },
    { name: 'How it Works', href: '#HowItWorks', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Drawer = ({ children, isOpen, setIsOpen }: { children: React.ReactNode, isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
    return (
        <main
            className={
                "fixed overflow-hidden  bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen ? "transition-opacity opacity-100 duration-500 translate-x-0" : "transition-all delay-500 opacity-0 -translate-x-full")
            }
        >
            <section
                className={
                    "w-340px max-w-lg left-0 absolute bg-white h-full  delay-400 duration-500 ease-in-out transition-all transform " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
                }
            >
                <article className="relative w-270 max-w-lg pb-10 flex flex-col space-y-6 h-full">
                    <header className="p-4 flex items-center justify-between">
                        <Image
                            className="h-12 w-40"
                            src={'/pbresult-logo.png'}
                            alt="Courses-Logo"
                            height={12}
                            width={40}
                            onClick={() => setIsOpen(false)}
                        />
                        <XMarkIcon className="block h-6 w-6" onClick={() => setIsOpen(false)} />
                    </header>
                    <div onClick={() => setIsOpen(false)}>
                        {children}
                    </div>
                </article>
            </section>
            <section
                className="w-screen h-full cursor-pointer"
                onClick={() => setIsOpen(false)}
            ></section>
        </main>
    );
}

const Drawerdata = () => {
    return (
        <div className="max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {drawerNavigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                                    'px-2 py-1 text-lg font-normal opacity-75 block'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4"></div>
                        <Link href="https://ekschool.pbresultvault.com/">
                            <button className="bg-purple text-white font-medium py-2 px-4 rounded w-full sm:w-auto">
                                School Login
                            </button>
                        </Link>
                        <Link href="https://ekteacher.pbresultvault.com/login">
                            <button className="bg-[#218F6A] text-white font-medium py-2 px-4 rounded w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2">
                                Teacher Login
                            </button>
                        </Link>
                        <Link href="https://ekstudent.pbresultvault.com/login">
                            <button className="bg-purple text-white font-medium py-2 px-4 rounded w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2">
                                Student Login
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDownload = () => {
        fileDownload('/manual.pdf', 'manual.pdf'); 
    };

    return (
        <Disclosure as="nav" className="relative"> {/* Removed the sticky effect here */}
            <>
                <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center justify-between">
                            {/* LOGO */}
                            <div className="flex flex-shrink-0 items-center">
                                <Image
                                    className="block h-12 w-40 lg:hidden"
                                    src={'/ekiti-logo.jpg'}
                                    height={12}
                                    width={40}
                                    alt="pbresult-logo"
                                />
                                <Image
                                    className="hidden h-30 w-40 lg:block"
                                    src={'/ekiti-logo.jpg'}
                                    height={30}
                                    width={30}
                                    alt="pbresult-logo"
                                />
                            </div>
                            {/* LINKS */}
                            <div className="hidden lg:flex items-center space-x-4 m-auto whitespace-nowrap">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'text-black hover:opacity-100' : 'hover:text-black hover:opacity-100',
                                            'px-3 py-4 text-lg font-normal opacity-75 space-links'
                                        )}
                                        aria-current={item.href ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                {/* CTA BUTTONS */}
                                <div className="flex items-center space-x-2">
                                    <Link href="https://ekschool.pbresultvault.com/">
                                        <button className="border-[#79b297] font-medium py-2 px-4 rounded w-full sm:w-auto text-[#00733d] bg-white border-2">
                                            School Login
                                        </button>
                                    </Link>
                                    <Link href="https://ekteacher.pbresultvault.com/login">
                                        <button className="bg-[#00733d] text-white font-medium py-2 px-4 rounded w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2">
                                            Teacher Login
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* DRAWER FOR MOBILE VIEW */}
                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    );
}

export default Navbar;
