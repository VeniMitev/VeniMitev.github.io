import Link from 'next/link';
import React from 'react';

const DownloadCV = () => {
    return (
        <button className='flex items-center rounded border p-2 text-gray-700 hover:border-blue-500 hover:text-blue-500'>
            <Link
                href='/Venelin_Mitev_Resume.pdf'
                download={'Venelin_Mitev_Resume.pdf'}
                target='_blank'
                className='lg:text-md text-sm font-medium tracking-tight text-gray-700 hover:text-blue-500'
            >
                Download CV
            </Link>
        </button>
    );
};

export default DownloadCV;
