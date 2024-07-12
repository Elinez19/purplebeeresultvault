import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'About', href: '/', current: true },
    { name: 'Features', href: '#services', current: false },
    { name: 'Why Pbresult', href: '#about', current: false },
    { name: 'Contact', href: '#project', current: false },
    { name: 'Support', href: '/', current: false },
];

const drawerNavigation: NavigationItem[] = [
    { name: 'About', href: '/', current: true },
    { name: 'Features', href: '#services', current: false },
    { name: 'Why Pbresult', href: '#about', current: false },
    { name: 'Contact', href: '#project', current: false },
    { name: 'Support', href: '/', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Drawer = ({ children, isOpen, setIsOpen }: { children: React.ReactNode, isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
    return (
        <main
            className={
                "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen ? "transition-opacity opacity-100 duration-500 translate-x-0" : "transition-all delay-500 opacity-0 -translate-x-full")
            }
        >
            <section
                className={
                    "w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
                }
            >
                <article className="relative w-270 max-w-lg pb-10 flex flex-col space-y-6 h-full">
                    <header className="p-4 flex items-center justify-between">
                        <img
                            className="h-12 w-40"
                            src={'/images/pbresult-logo.png'}
                            alt="Courses-Logo"
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
        <div className="rounded-md max-w-sm w-full mx-auto">
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
                        <Link href="https://school.pbresultvault.com/login">
                            <button className="bg-purple w-full text-white border border-lightblue font-medium py-2 px-4 rounded">
                                Sign In
                            </button>
                        </Link>
                        <button className="bg-purple w-full hover:bg-blue hover:text-white text-blue font-medium my-2 py-2 px-4 rounded">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center justify-between">
                            {/* LOGO */}
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="block h-12 w-40 lg:hidden"
                                    src={'/images/pbresult-logo.png'}
                                    alt="pbresult-logo"
                                />
                                <img
                                    className="hidden h-full w-full lg:block"
                                    src={'/images/pbresult-logo.png'}
                                    alt="pbresult-logo"
                                />
                            </div>
                            {/* LINKS */}
                            <div className="hidden lg:flex items-center space-x-4 m-auto">
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
                                    <Link href="https://school.pbresultvault.com/login">
                                        <button className="bg-purple text-white font-medium py-2 px-4 rounded">
                                            Sign In
                                        </button>
                                    </Link>
                                    <Link href="https://school.pbresultvault.com/register">
                                    <button className="bg-blue text-white font-medium py-2 px-4 rounded">
                                        Sign Up
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
