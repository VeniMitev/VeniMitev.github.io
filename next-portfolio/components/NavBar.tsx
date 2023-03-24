'use client';

import Link from 'next/link';
import React from 'react';

const NavBar = ({ handleThemeChange }: { handleThemeChange: Function }) => {
    return (
        <nav className='flex items-center justify-between px-4 py-3'>
            <div className='flex justify-center text-center'>
                <div>
                    <h1 className='select-none text-2xl font-semibold tracking-tight text-gray-700 md:text-3xl lg:text-4xl'>
                        VeniMitev.dev
                    </h1>
                </div>
                <button
                    className='flex items-center rounded border px-3 py-2 mx-6 text-gray-700 hover:border-blue-500 hover:text-blue-500'
                    onClick={() => handleThemeChange()}
                >
                    theme
                </button>
            </div>

            <div className='flex justify-center text-center'>
                <Link
                    href='/'
                    className='lg:text-md m-2 text-sm font-medium tracking-tight text-gray-700 hover:text-blue-500 lg:m-6'
                >
                    Home
                </Link>
                <Link
                    href='/experience'
                    className='lg:text-md m-2 text-sm font-medium tracking-tight text-gray-700 hover:text-blue-500 lg:m-6'
                >
                    Experience
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
                <Link
                    href='/'
                    className='lg:text-md m-2 text-sm font-medium tracking-tight text-gray-700 hover:text-blue-500 lg:m-6'
                >
                    Download CV
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
