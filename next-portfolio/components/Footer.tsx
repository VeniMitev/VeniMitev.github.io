'use client'

import Link from 'next/link';
import React from 'react';
import {
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

const footerButtons = [
    {
        name: 'GitHub',
        icon: <FaGithub className='m-1 self-center' />,
        href: 'https://github.com/VeniMitev',
        hover: 'hover:text-github',
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedin className='m-1 self-center ' />,
        href: 'https://www.linkedin.com/in/venelin-mitev/',
        hover: 'hover:text-linkedin',
    },
    // {
    //     name: 'Instagram',
    //     icon: <FaInstagram className='m-1 self-center' />,
    //     href: 'https://www.instagram.com/venelin_m',
    //     hover: 'hover:text-instagram',
    // },
    {
        name: 'Email',
        icon: <FaEnvelope className='m-1 self-center' />,
        href: 'mailto:business@venimitev.com',
        hover: 'hover:text-emerald-500',
    },
    {
        name: 'YouTube',
        icon: <FaYoutube className='m-1 self-center' />,
        href: 'https://www.youtube.com/channel/UCoGzGTZdwwVaActFVhqygZg',
        hover: 'hover:text-youtube',
    },
];

const next = (
    <Link
        className='text-blue-600 hover:text-blue-800'
        href='https://nextjs.org/'
        target='_blank'
        prefetch
    >
        Next.js
    </Link>
);

const tailwind = (
    <Link
        className='text-blue-600 hover:text-blue-800'
        href='https://tailwindcss.com/'
        target='_blank'
        prefetch
    >
        Tailwind CSS
    </Link>
);

const vercel = (
    <Link
        className='text-blue-600 hover:text-blue-800'
        href='https://vercel.com/'
        target='_blank'
        prefetch
    >
        Vercel
    </Link>
);

const sanity = (
    <Link
        className='text-blue-600 hover:text-blue-800'
        href='https://sanity.io/'
        target='_blank'
        prefetch
    >
        Sanity
    </Link>
);

export default function Footer() {
    return (
        <footer className='bottom-0 mt-auto flex h-max justify-center overflow-hidden align-middle md:h-28'>
            <div className='w-11/12 transform overflow-hidden rounded-lg border bg-gray-50 p-2 md:pb-8 text-center drop-shadow-sm transition duration-500 ease-in-out hover:drop-shadow-xl md:w-[60em] md:translate-y-14 md:hover:translate-y-2 md:hover:bg-white'>
                <code className='select-none'>
                    &copy; Veni Mitev {new Date().getFullYear()}
                </code>

                <div className='m-2 flex flex-col flex-wrap md:flex-row'>
                    {!!footerButtons &&  footerButtons.map((social) => (
                        <FooterButton
                            key={social.name}
                            title={social.name}
                            href={social.href}
                            icon={social.icon}
                        />
                    ))}
                </div>
                <div>
                    <p className='select-none text-xs mb-10'>
                        Built with {next}, {sanity} and {tailwind}. Deployed on{' '}
                        {vercel}.
                    </p>
                </div>
            </div>
        </footer>
    );
}

type FooterButtonProps = {
    href: string;
    icon: React.ReactElement;
    title: string;
};

const FooterButton = ({ href, icon, title }: FooterButtonProps) => {
    const hover = `hover:text-${title ? title.toLocaleLowerCase() : 'emerald-500'}`;

    return (
        <Link
            className={twMerge(
                'm-1 inline-flex grow select-none justify-center align-middle transition duration-500 ease-in-out',
                hover
            )}
            href={href}
            target='_blank'
            prefetch
        >
            {icon}
            {title}

            <span className='animate-pulse font-extrabold'>_</span>
        </Link>
    );
};
