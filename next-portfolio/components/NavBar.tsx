'use client';

import Link from 'next/link';
import React from 'react';

const NavBar = ({
    handleThemeChange,
    mood,
}: {
    handleThemeChange: Function;
    mood: string;
}) => {
    return (
        <nav className='flex items-center justify-between px-4 py-3'>
            <div className='flex justify-center text-center'>
                <div>
                    <h1 className='text-2xl font-semibold tracking-tight text-gray-700 select-none md:text-3xl lg:text-4xl'>
                        VeniMitev.dev
                    </h1>
                </div>
                <button
                    className='flex items-center px-3 py-2 mx-6 text-gray-700 border rounded hover:border-blue-500 hover:text-blue-500'
                    onClick={() => handleThemeChange()}
                >
                    Switch to {mood === 'ocean' ? 'Forrest' : 'Ocean'}
                </button>
            </div>

            <div className='flex justify-center text-center'>
                <Link
                    href='/'
                    className='m-2 text-sm font-medium tracking-tight text-gray-700 lg:text-md hover:text-blue-500 lg:m-6'
                >
                    Home
                </Link>
                <Link
                    href='/experience'
                    className='m-2 text-sm font-medium tracking-tight text-gray-700 lg:text-md hover:text-blue-500 lg:m-6'
                >
                    Experience
                </Link>
                <Link
                    href='/projects'
                    className='m-2 text-sm font-medium tracking-tight text-gray-700 lg:text-md hover:text-blue-500 lg:m-6'
                >
                    Projects
                </Link>
                <Link
                    href='/contact'
                    className='m-2 text-sm font-medium tracking-tight text-gray-700 lg:text-md hover:text-blue-500 lg:m-6'
                >
                    Contact
                </Link>
                {/* <Link
                    href='/'
                    className='m-2 text-sm font-medium tracking-tight text-gray-700 lg:text-md hover:text-blue-500 lg:m-6'
                >
                    Download CV
                </Link> */}
            </div>
        </nav>
    );
};

export default NavBar;
