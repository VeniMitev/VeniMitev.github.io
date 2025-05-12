import Link from 'next/link';
import React from 'react';
import { getHomePage } from '../sanity/sanity-utils';

const DownloadCV = async () => {
    const data = await getHomePage();
    const resume = data.resume;

    if (!resume) {
        return null; // or some fallback UI
    }

    return (
        <button className='bg-blue-300 flex items-center rounded p-2 hover:border-blue-500 hover:text-blue-500'>
            <Link
                href={`${resume.file}?dl=${resume.fileNameOnDownload}.pdf`}
                target='_blank'
                rel='noreferrer'
                download
                prefetch
            >
                Download Resume
            </Link>
        </button>
    );
};

export default DownloadCV;
