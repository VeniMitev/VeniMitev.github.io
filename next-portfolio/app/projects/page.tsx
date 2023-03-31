import Link from 'next/link';
import React from 'react';

const Projects = () => {
    return (
        <>
            <h1 className='py-6 text-center'>
                <span className='text-3xl font-semibold'>Projects</span>
            </h1>
            <div className='mx-auto grid max-w-5xl grid-cols-3 items-center justify-center gap-4'>
                <Project />
                <Project />
                <Project />
            </div>
        </>
    );
};

const Project = () => {
    return (
        <div className='w-5/6 max-w-xl justify-self-center bg-white'>
            <h1 className='px-8'>Project</h1>
            <div className='my-5 h-40 bg-slate-600' />
            <p className='px-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptas, quod, quia, voluptates quae voluptatibus quibusdam
                voluptatum quas quidem quos nesciunt. Quisquam, quae. Quisquam
                quae, quod quibusdam voluptas quos voluptate.
            </p>

            <div className='flex justify-between px-8 py-4'>
                <div className='flex gap-4'>
                    <div className='h-6 w-6 rounded-full bg-slate-600' />
                    <div className='h-6 w-6 rounded-full bg-slate-600' />
                    <div className='h-6 w-6 rounded-full bg-slate-600' />
                    <div className='h-6 w-6 rounded-full bg-slate-600' />
                </div>
            </div>

            <div>
                <Link
                    href=''
                    className='block bg-slate-400 px-8 py-2 text-center text-white'
                >
                    View Project
                </Link>

                <Link
                    href=''
                    className='block bg-slate-400 px-8 py-2 text-center text-white'
                >
                    View Code
                </Link>
            </div>
        </div>
    );
};

export default Projects;
