import Link from 'next/link';
import Image from 'next/image';
import { getSingleProject } from '../../../sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

// TODO: Implement page for every project for case studies, info, etc.

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
    const project = await getSingleProject(params.slug);

    return (
        <section className='flex flex-col items-center justify-center'>
            <Link
                className='ml-10 self-start font-bold uppercase text-blue-400 hover:text-blue-600'
                href='/projects'
            >
                Back to Projects
            </Link>
            <h1 className='my-6 text-center text-xl font-semibold'>
                <span className='text-3xl font-semibold'>Case Study:</span>
                <br /> {project.title}
            </h1>

            <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={600}
                className='mb-5 max-w-screen-md rounded-sm shadow-lg'
                placeholder='blur'
                blurDataURL={project.image}
            />

            <section className='m-4 mx-5 my-10 transform rounded-md bg-gray-50 px-6 shadow-lg transition duration-500 ease-in-out hover:bg-white'>
                <div className={'rich-text-container my-6 max-w-screen-md'}>
                    <PortableText value={project.caseStudy} />
                </div>
            </section>

            <section>
                <h2 className='my-6 text-center text-xl font-semibold'>
                    Technology Stack Used:
                </h2>
                <div className='flex gap-8 px-8 py-2 max-w-screen-md'>
                    {project.tech.map((technology) => (
                        <div
                            key={technology.name}
                            className='group relative'
                        >
                            <span className='absolute bottom-20 min-w-fit scale-0 rounded bg-slate-800 p-2 text-xs text-white transition-all group-hover:scale-100'>
                                {technology.name}
                            </span>
                            <Image
                                src={technology.icon}
                                alt={technology.name}
                                width={60}
                                height={60}
                                className='rounded-full bg-white shadow-md p-2 w-16'
                            />
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default ProjectPage;
