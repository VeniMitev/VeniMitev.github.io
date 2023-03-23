import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className='flex items-center justify-between px-4 py-3'>
            <div>
                <h1 className='select-none text-2xl font-semibold tracking-tight text-gray-700 md:text-3xl lg:text-4xl'>
                    VeniMitev.dev
                </h1>
            </div>

            <div className='flex justify-center text-center'>
                <Link
                    href='/'
                    className='lg:text-md m-2 text-sm font-medium tracking-tight text-gray-700 hover:text-blue-500 lg:m-6'
                >
                    Home
                </Link>
                <Link
                    href='/about'
                    className='lg:text-md m-2 text-sm font-medium tracking-tight text-gray-700 hover:text-blue-500 lg:m-6'
                >
                    About
                </Link>
                <Link
                    href='/projects'
                    className='lg:text-md m-2 text-sm font-medium tracking-tight text-gray-700 hover:text-blue-500 lg:m-6'
                >
                    Projects
                </Link>
                <Link
                    href='/contact'
                    className='lg:text-md m-2 text-sm font-medium tracking-tight text-gray-700 hover:text-blue-500 lg:m-6'
                >
                    Contact
                </Link>
            </div>
            <div>
                <Link
                    href='/'
                    className='focus:shadow-outline rounded bg-white px-4 py-2 font-bold text-black outline-4 outline-slate-700 hover:bg-slate-200 hover:text-white focus:outline-none'
                >
                    Download CV
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
