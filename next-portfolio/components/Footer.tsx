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
        <footer className='mt-auto flex h-max w-screen justify-center overflow-hidden align-middle md:h-24'>
            <div className=' w-max transform overflow-hidden rounded-md border bg-gray-50 p-2 text-center drop-shadow-sm transition duration-700 ease-in-out hover:translate-y-0 hover:drop-shadow-xl md:w-3/6 md:translate-y-10'>
                <code>&copy; Veni Mitev - {new Date().getFullYear()}</code>
                <br />

                <div className='m-2 flex flex-col flex-wrap md:flex-row'>
                    <Link
                        className='m-1 inline-flex grow justify-center align-middle hover:text-[#171515]'
                        href='https://github.com/VeniMitev'
                        target='_blank'
                    >
                        <FaGithub className='m-1 self-center' />
                        GitHub
                    </Link>

                    <Link
                        className='m-1 inline-flex grow justify-center align-middle hover:text-[#0072b1]'
                        href='https://www.linkedin.com/in/venelin-mitev/'
                        target='_blank'
                    >
                        <FaLinkedin className='m-1 self-center' />
                        LinkedIn
                    </Link>
                    <Link
                        className='m-1 inline-flex grow justify-center align-middle hover:text-[#8a3ab9]'
                        href='https://www.instagram.com/venelin_m'
                        target='_blank'
                    >
                        <FaInstagram className='m-1 self-center' />
                        Instagram
                    </Link>
                    <Link
                        className='m-1 inline-flex grow justify-center align-middle hover:text-[steelblue]'
                        href='mailto:business@venimitev.com'
                        target='_blank'
                    >
                        <FaEnvelope className='m-1 self-center' />
                        Email
                    </Link>
                    <Link
                        className='m-1 inline-flex grow justify-center align-middle hover:text-[#ff0000]'
                        href='https://www.youtube.com/channel/UCoGzGTZdwwVaActFVhqygZg'
                        target='_blank'
                    >
                        <FaYoutube className='m-1 self-center' />
                        YouTube
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
