import Link from 'next/link';
import React from 'react';
import {
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='mt-auto flex h-max w-screen justify-center overflow-hidden align-middle md:h-28'>
            <div className='w-11/12 transform overflow-hidden rounded-lg border bg-gray-50 p-2 text-center drop-shadow-sm transition duration-500 ease-in-out hover:translate-y-2 hover:bg-white hover:drop-shadow-xl md:w-[60em] md:translate-y-14'>
                <code className='select-none'>
                    &copy; Veni Mitev {new Date().getFullYear()}
                </code>

                <div className='m-2 flex flex-col flex-wrap md:flex-row'>
                    <Link
                        className='m-1 inline-flex grow select-none justify-center align-middle hover:text-[#171515]'
                        href='https://github.com/VeniMitev'
                        target='_blank'
                    >
                        <FaGithub className='m-1 self-center' />
                        GitHub
                        <span className='animate-pulse font-extrabold'>_</span>
                    </Link>
                    <Link
                        className='m-1 inline-flex grow select-none justify-center align-middle hover:text-[#0072b1]'
                        href='https://www.linkedin.com/in/venelin-mitev/'
                        target='_blank'
                    >
                        <FaLinkedin className='m-1 self-center' />
                        LinkedIn
                        <span className='animate-pulse font-extrabold'>_</span>
                    </Link>
                    <Link
                        className='m-1 inline-flex grow select-none justify-center align-middle hover:text-[#8a3ab9]'
                        href='https://www.instagram.com/venelin_m'
                        target='_blank'
                    >
                        <FaInstagram className='m-1 self-center' />
                        Instagram
                        <span className='animate-pulse font-extrabold'>_</span>
                    </Link>
                    <Link
                        className='m-1 inline-flex grow select-none justify-center align-middle hover:text-[steelblue]'
                        href='mailto:business@venimitev.com'
                        target='_blank'
                    >
                        <FaEnvelope className='m-1 self-center' />
                        Email
                        <span className='animate-pulse font-extrabold'>_</span>
                    </Link>
                    <Link
                        className='m-1 inline-flex grow select-none justify-center align-middle hover:text-[#ff0000]'
                        href='https://www.youtube.com/channel/UCoGzGTZdwwVaActFVhqygZg'
                        target='_blank'
                    >
                        <FaYoutube className='m-1 self-center' />
                        YouTube
                        <span className='animate-pulse font-extrabold'>_</span>
                    </Link>
                </div>
                <div>
                    <p className='select-none text-xs'>
                        Built with{' '}
                        <Link
                            className='text-blue-500 hover:text-blue-600'
                            href='https://nextjs.org/'
                            target='_blank'
                        >
                            Next.js
                        </Link>{' '}
                        and{' '}
                        <Link
                            className='text-blue-500 hover:text-blue-600'
                            href='https://tailwindcss.com/'
                            target='_blank'
                        >
                            Tailwind CSS
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
