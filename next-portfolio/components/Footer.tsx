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
        <footer className='bottom-0 flex justify-center mt-auto overflow-hidden align-middle h-max md:h-28'>
            <div className='w-11/12 transform overflow-hidden rounded-lg border bg-gray-50 p-2 text-center drop-shadow-sm transition duration-500 ease-in-out hover:translate-y-2 hover:bg-white hover:drop-shadow-xl md:w-[60em] md:translate-y-14'>
                <code className='select-none'>
                    &copy; Veni Mitev {new Date().getFullYear()}
                </code>

                <div className='flex flex-col flex-wrap m-2 md:flex-row'>
                    <Link
                        className='m-1 inline-flex grow select-none justify-center align-middle hover:text-[#171515]'
                        href='https://github.com/VeniMitev'
                        target='_blank'
                    >
                        <FaGithub className='self-center m-1' />
                        GitHub
                        <span className='font-extrabold animate-pulse'>_</span>
                    </Link>
                    <Link
                        className='m-1 inline-flex grow select-none justify-center align-middle hover:text-[#0072b1]'
                        href='https://www.linkedin.com/in/venelin-mitev/'
                        target='_blank'
                    >
                        <FaLinkedin className='self-center m-1' />
                        LinkedIn
                        <span className='font-extrabold animate-pulse'>_</span>
                    </Link>
                    <Link
                        className='m-1 inline-flex grow select-none justify-center align-middle hover:text-[#8a3ab9]'
                        href='https://www.instagram.com/venelin_m'
                        target='_blank'
                    >
                        <FaInstagram className='self-center m-1' />
                        Instagram
                        <span className='font-extrabold animate-pulse'>_</span>
                    </Link>
                    <Link
                        className='m-1 inline-flex grow select-none justify-center align-middle hover:text-[steelblue]'
                        href='mailto:business@venimitev.com'
                        target='_blank'
                    >
                        <FaEnvelope className='self-center m-1' />
                        Email
                        <span className='font-extrabold animate-pulse'>_</span>
                    </Link>
                    <Link
                        className='m-1 inline-flex grow select-none justify-center align-middle hover:text-[#ff0000]'
                        href='https://www.youtube.com/channel/UCoGzGTZdwwVaActFVhqygZg'
                        target='_blank'
                    >
                        <FaYoutube className='self-center m-1' />
                        YouTube
                        <span className='font-extrabold animate-pulse'>_</span>
                    </Link>
                </div>
                <div>
                    <p className='text-xs select-none'>
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
                        </Link>. Deployed on{' '}
                        <Link
                            className='text-blue-500 hover:text-blue-600'
                            href='https://vercel.com/'
                            target='_blank'
                        >
                            Vercel
                        </Link>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
