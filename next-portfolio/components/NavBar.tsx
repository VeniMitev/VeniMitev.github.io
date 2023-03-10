import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className='flex items-center justify-between px-4 py-3'>
            <Link href='/'>
            <h1 className='text-xl font-semibold tracking-tight text-gray-700'>                
                VeniMitev.dev
            </h1>
            </Link>

            <div className='flex justify-center text-center'>
                <Link
                    href='/about'
                    className='text-sm font-medium tracking-tight text-gray-700 hover:text-blue-500'
                >
                    About
                </Link>
                <Link
                    href='/projects'
                    className='ml-4 text-sm font-medium tracking-tight text-gray-700 hover:text-blue-500'
                >
                    Projects
                </Link>
                <Link
                    href='/contact'
                    className='ml-4 text-sm font-medium tracking-tight text-gray-700 hover:text-blue-500'
                >
                    Contact
                </Link>
            </div>
            <div>
                <Link
                    href='/'
                    className='px-4 py-2 font-bold text-white bg-blue-500 rounded focus:shadow-outline hover:bg-blue-700 focus:outline-none'
                >
                    Download CV
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
