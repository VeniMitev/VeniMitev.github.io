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
        <nav className='flex flex-col items-center px-4 py-3 md:flex-row md:justify-between'>
            <div className='flex w-full gap-10 text-center justify-evenly md:justify-center'>
                <div className='m-0'>
                    <h1 className='text-2xl font-semibold tracking-tight text-gray-700 select-none md:text-3xl lg:text-4xl'>
                        VeniMitev.dev
                    </h1>
                </div>
                <button
                    className='flex items-center text-gray-700 border rounded hover:border-blue-500 hover:text-blue-500'
                    onClick={() => handleThemeChange()}
                >
                    <span className='invisible w-0 h-0 p-0 md:visible md:mx-6 md:h-auto md:w-auto md:py-2 md:px-3'>
                        Switch to {mood === 'ocean' ? 'Forrest' : 'Ocean'}
                    </span>
                    <span className='visible w-auto h-auto p-1 md:invisible md:m-0 md:h-0 md:w-0 md:p-0'>
                        {mood === 'ocean' ? '🌲' : '🌊'}
                    </span>
                </button>
            </div>

            <div className='flex justify-around gap-5 text-center md:justify-center'>
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
            </div>
        </nav>
    );
};

export default NavBar;
