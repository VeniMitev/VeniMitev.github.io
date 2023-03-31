import React from 'react';

const Projects = () => {
    return (
        <>
            <h1 className='text-center py-6'>
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
        <div className='max-w-xl justify-self-center bg-white'>
            <h1 className='px-8'>Project</h1>
        </div>
    );
};

export default Projects;
