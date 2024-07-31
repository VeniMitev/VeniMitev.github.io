import Link from 'next/link';
import React from 'react';

const DownloadCV = () => {
    return (
        <button className='bg-blue-300 flex items-center rounded p-2 hover:border-blue-500 hover:text-blue-500'>
            <Link
                href='/Veni_Mitev_Resume.pdf'
                download={'Veni_Mitev_Resume.pdf'}
                target='_blank'
                className='lg:text-md text-sm font-medium tracking-tight text-gray-700 hover:text-white'
            >
                Download CV
            </Link>
        </button>
    );
};

export default DownloadCV;
