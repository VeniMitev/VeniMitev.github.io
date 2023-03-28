import React from 'react';
import Image from 'next/image';
import data from '../data/technologies.json';

const Icons = () => {
    return (
        <>
            <h2 className='my-6 select-none text-center text-lg font-medium'>
                Technologies:
            </h2>
            <div className='grid grid-cols-2 content-center gap-6 md:grid-cols-3 lg:grid-cols-4'>
                {data.current.map((item) => (
                    <div
                        key={item.alt}
                        className='mx-3 inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:animate-pulse hover:drop-shadow-lg '
                    >
                        <Image
                            draggable={false}
                            loading='lazy'
                            src={item.image}
                            alt={item.alt}
                            width={50}
                            height={50}
                        />
                        <span className='font-sans'>{item.name}</span>
                    </div>
                ))}
            </div>

            <h2 className='my-6 select-none text-center text-lg font-medium'>
                Coming soon:
            </h2>
            <div className='grid grid-cols-2 content-center gap-6 md:grid-cols-3 lg:grid-cols-4'>
                {data.coming_soon.map((item) => (
                    <div
                        key={item.alt}
                        className='mx-3 inline-flex transform select-none !items-center gap-3 rounded-sm p-2 drop-shadow-sm transition duration-700 hover:scale-105 hover:animate-pulse hover:drop-shadow-lg '
                    >
                        <Image
                            draggable={false}
                            loading='lazy'
                            src={item.image}
                            alt={item.alt}
                            width={50}
                            height={50}
                        />
                        <span className='font-sans'>{item.name}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Icons;
