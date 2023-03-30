import Link from 'next/link';
import React from 'react';
import {
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from 'react-icons/fa';

const footerButtons = [
    {
        name: 'GitHub',
        icon: <FaGithub className='m-1 self-center' />,
        href: 'https://github.com/VeniMitev',
        color: '#171515',
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedin className='m-1 self-center ' />,
        href: 'https://www.linkedin.com/in/venelin-mitev/',
        color: '#0072b1',
    },
    {
        name: 'Instagram',
        icon: <FaInstagram className='m-1 self-center' />,
        href: 'https://www.instagram.com/venelin_m',
        color: '#8a3ab9',
    },
    {
        name: 'Email',
        icon: <FaEnvelope className='m-1 self-center' />,
        href: 'mailto:business@venimitev.com',
        color: 'steelblue',
    },
    {
        name: 'YouTube',
        icon: <FaYoutube className='m-1 self-center' />,
        href: 'https://www.youtube.com/channel/UCoGzGTZdwwVaActFVhqygZg',
        color: '#ff0000',
    },
];

const Footer = () => {
    const next = (
        <Link
            className='text-blue-500 hover:text-blue-600'
            href='https://nextjs.org/'
            target='_blank'
        >
            Next.js
        </Link>
    );

    const tailwind = (
        <Link
            className='text-blue-500 hover:text-blue-600'
            href='https://tailwindcss.com/'
            target='_blank'
        >
            Tailwind CSS
        </Link>
    );

    const vercel = (
        <Link
            className='text-blue-500 hover:text-blue-600'
            href='https://vercel.com/'
            target='_blank'
        >
            Vercel
        </Link>
    );

    return (
        <footer className='bottom-0 mt-auto flex h-max justify-center overflow-hidden align-middle md:h-28'>
            <div className='w-11/12 transform overflow-hidden rounded-lg border bg-gray-50 p-2 text-center drop-shadow-sm transition duration-500 ease-in-out hover:drop-shadow-xl md:w-[60em] md:translate-y-14 md:hover:translate-y-2 md:hover:bg-white'>
                <code className='select-none'>
                    &copy; Veni Mitev {new Date().getFullYear()}
                </code>

                <div className='m-2 flex flex-col flex-wrap md:flex-row'>
                    {footerButtons.map((button) => (
                        <FooterButton key={button.name} {...button} />
                    ))}
                </div>
                <div>
                    <p className='select-none text-xs'>
                        Built with {next} and {tailwind}. Deployed on {vercel}.
                    </p>
                </div>
            </div>
        </footer>
    );
};

const FooterButton = ({
    href,
    icon,
    name,
    color,
}: {
    href: string;
    icon: React.ReactNode;
    name: string;
    color: string;
}) => {
    return (
        <Link
            className={`m-1 inline-flex grow select-none justify-center align-middle hover:text-[${color}]`}
            href={href}
            target='_blank'
        >
            {icon}
            {name}
            <span className='animate-pulse font-extrabold'>_</span>
        </Link>
    );
};

export default Footer;
