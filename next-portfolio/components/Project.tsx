'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { PortableTextBlock } from 'sanity';
import { PortableText } from '@portabletext/react';

type ProjectProps = {
    title: string;
    subTitle: string;
    description: PortableTextBlock[];
    image: string;
    tech: {
        name: string;
        icon: string;
    }[];
    github: string;
    projectUrl: string;
};

const Project = ({
    title,
    subTitle,
    description,
    image,
    tech,
    github,
    projectUrl,
}: ProjectProps) => {
    const [lineClamp, setLineClamp] = useState(' line-clamp-6');

    return (
        <div className='grid h-full w-11/12 max-w-xl content-between justify-self-center rounded-sm bg-white py-2 shadow-lg xl:rounded-lg'>
            <div>
                <h1 className='m-2 px-8 text-xl font-semibold'>{title}</h1>
                <h2 className='text-md m-2 px-8 font-medium opacity-75'>
                    {subTitle}
                </h2>

                <Image
                    src={image}
                    alt={title}
                    width={1000}
                    height={600}
                    className='mb-5'
                />

                {/* <p className={'px-8' + lineClamp}>{description}</p> */}

                <div className={'px-8' + lineClamp}>
                    <PortableText value={description} />
                </div>

                <button
                    className='px-8 py-2 text-blue-400 hover:text-blue-700'
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
                <div className='mt-4 flex justify-center gap-8 px-8 py-2'>
                    {tech.map((technology) => (
                        <Image
                            key={technology.name}
                            src={technology.icon}
                            alt={technology.name}
                            width={30}
                            height={30}
                        />
                    ))}
                </div>

                <div>
                    {projectUrl !== 'no' && (
                        <Link
                            href={projectUrl}
                            className='mx-6 my-4 block rounded-sm bg-slate-900 px-8 py-2 text-center text-slate-200 hover:bg-slate-200 hover:text-slate-900'
                            target='_blank'
                        >
                            View Project
                        </Link>
                    )}

                    {github !== 'no' && (
                        <Link
                            href={github}
                            className='mx-6 my-4 block rounded-sm bg-slate-900 px-8 py-2 text-center text-slate-200 hover:bg-slate-200 hover:text-slate-900'
                            target='_blank'
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