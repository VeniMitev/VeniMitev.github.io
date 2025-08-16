'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { PortableText } from '@portabletext/react';
import { Project as ProjectType } from '../sanity/sanity-utils';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

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
        <div className='flex flex-col h-full max-w-xl justify-between rounded-md bg-white py-2 shadow-lg md:rounded-lg lg:w-11/12 lg:rounded-lg'>
            <div className='flex flex-col px-2'>
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

                <div className={cn('px-4', lineClamp, 'rich-text-container')}>
                    <PortableText value={description} />
                </div>

                <Button
                    variant='link'
                    className='w-fit'
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
                </Button>
            </div>

            <div>
                {technologies && (
                    <div className='mt-4 grid grid-cols-6 gap-2 lg:gap-8 px-8 py-2'>
                        {technologies?.map((technology) => (
                            <div
                                key={technology.title}
                                className='group relative'
                            >
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
                    </div>
                )}

                <div className='flex flex-col gap-4 px-4 py-2'>
                    {slug && (
                        <Button asChild>
                            <Link
                                href={'/projects/' + slug.current}
                                prefetch
                                className='text-white!'
                            >
                                Case Study
                            </Link>
                        </Button>
                    )}

                    {projectUrl && projectUrl !== 'no' && (
                        <Button asChild>
                            <Link
                                href={projectUrl}
                                target='_blank'
                                prefetch
                                className='text-white!'
                            >
                                View Project
                            </Link>
                        </Button>
                    )}

                    {github && github !== 'no' && (
                        <Button asChild>
                            <Link
                                href={github}
                                target='_blank'
                                prefetch
                                className='text-white!'
                            >
                                View Code
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
