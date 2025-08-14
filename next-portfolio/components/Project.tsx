'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { PortableText } from '@portabletext/react';
import { Project as ProjectType } from '../sanity/sanity-utils';

const Project = ({
    title,
    subTitle,
    description,
    image,
    technologies,
    github,
    projectUrl,
    slug,
}: ProjectType) => {
    const [lineClamp, setLineClamp] = useState(' line-clamp-6');

    return (
        <div className='mx-2 grid h-full max-w-xl content-between justify-self-center rounded-md bg-white py-2 shadow-lg md:rounded-lg lg:w-11/12 lg:rounded-lg'>
            <div>
                <h1 className='px-4 text-xl font-semibold lg:px-8'>{title}</h1>
                <h2 className='text-md px-4 font-medium opacity-75 lg:px-8'>
                    {subTitle}
                </h2>

                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        width={1000}
                        height={600}
                        className='my-5'
                        placeholder='blur'
                        blurDataURL={image}
                    />
                ) : (
                    <div className='h-56' />
                )}

                <div
                    className={
                        'px-4 lg:px-8' + lineClamp + ' rich-text-container'
                    }
                >
                    <PortableText value={description} />
                </div>

                <button
                    className='px-4 py-2 text-blue-400 hover:text-blue-700 lg:px-8'
                    onClick={() => {
                        setLineClamp(
                            lineClamp === ' line-clamp-6'
                                ? ' line-clamp-none'
                                : ' line-clamp-6'
                        );
                    }}
                >
                    {lineClamp === ' line-clamp-6'
                        ? 'Read More...'
                        : 'Read Less...'}
                </button>
            </div>

            <div>
                {technologies && <div className='mt-4 grid grid-cols-6 gap-2 lg:gap-8 px-8 py-2'>
                    {technologies?.map((technology) => (
                        <div key={technology.title} className='group relative'>
                            <span className='absolute bottom-10 min-w-fit scale-0 rounded bg-slate-800 p-2 text-xs text-white transition-all group-hover:scale-100'>
                                {technology.title}
                            </span>
                            <Image
                                src={technology.icon.image}
                                alt={technology.icon.alt}
                                width={30}
                                height={30}
                            />
                        </div>
                    ))}
                </div>}

                <div>
                    {slug && (
                        <Link
                            href={'/projects/' + slug.current}
                            className='mx-6 my-4 block rounded-sm bg-slate-900 px-8 py-2 text-center text-slate-200 hover:bg-slate-200 hover:text-slate-900'
                            prefetch
                        >
                            Case Study
                        </Link>
                    )}

                    {projectUrl && projectUrl !== 'no' && (
                        <Link
                            href={projectUrl}
                            className='mx-6 my-4 block rounded-sm bg-slate-900 px-8 py-2 text-center text-slate-200 hover:bg-slate-200 hover:text-slate-900'
                            target='_blank'
                            prefetch
                        >
                            View Project
                        </Link>
                    )}

                    {github && github !== 'no' && (
                        <Link
                            href={github}
                            className='mx-6 my-4 block rounded-sm bg-slate-900 px-8 py-2 text-center text-slate-200 hover:bg-slate-200 hover:text-slate-900'
                            target='_blank'
                            prefetch
                        >
                            View Code
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
