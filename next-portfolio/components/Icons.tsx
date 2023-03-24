import React from 'react';
import Image from 'next/image';

const Icons = () => {
    return (
        <>
            <h2 className='my-6 text-center text-lg font-medium select-none'>
                Technologies:
            </h2>
            <div className='grid grid-cols-3 content-center gap-4 md:grid-cols-4'>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg '>
                    <Image
                        src='/icons/html5.svg'
                        alt='HTML5'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>HTML5</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg '>
                    <Image
                        src='/icons/css3.svg'
                        alt='CSS3'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>CSS3</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg '>
                    <Image
                        src='/icons/javascript.svg'
                        alt='JavaScript'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>JavaScript</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg '>
                    <Image
                        src='/icons/typescript.svg'
                        alt='TypeScript'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>TypeScript</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg '>
                    <Image
                        src='/icons/react.svg'
                        alt='React'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>ReactJS</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg'>
                    <Image
                        src='/icons/nextjs.svg'
                        alt='Next.js'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>NextJS</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg'>
                    <Image
                        src='/icons/nodejs.svg'
                        alt='Node.js'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>NodeJS</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg'>
                    <Image
                        src='/icons/express.svg'
                        alt='Express'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>ExpressJS</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg'>
                    <Image
                        src='/icons/mongodb.svg'
                        alt='MongoDB'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>MongoDB</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg'>
                    <Image
                        src='/icons/npm.svg'
                        alt='npm'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>npm</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg'>
                    <Image
                        src='/icons/git.svg'
                        alt='git'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>git</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg'>
                    <Image
                        src='/icons/github.svg'
                        alt='GitHub'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>GitHub</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg '>
                    <Image
                        src='/icons/firebase.svg'
                        alt='Firebase'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>Firebase</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg '>
                    <Image
                        src='/icons/photoshop.svg'
                        alt='Photoshop'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>Photoshop</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg '>
                    <Image
                        src='/icons/premierepro.svg'
                        alt='Premier Pro'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>Premier Pro</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg '>
                    <Image
                        src='/icons/magento.svg'
                        alt='Magento'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>Magento 2</span>
                </div>
            </div>

            <h2 className='my-6 text-center text-lg font-medium select-none'>
                Coming soon:
            </h2>
            <div className='grid grid-cols-3 gap-4 md:grid-cols-3'>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg '>
                    <Image
                        src='/icons/python.svg'
                        alt='Python'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>Python</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg '>
                    <Image
                        src='/icons/rust.svg'
                        alt='Rust'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>Rust</span>
                </div>
                <div className='inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:drop-shadow-lg '>
                    <Image
                        src='/icons/svelte.svg'
                        alt='Svelte'
                        width={50}
                        height={50}
                    />
                    <span className='font-sans'>Svelte</span>
                </div>
            </div>
        </>
    );
};

export default Icons;
