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
                className='ml-4 self-start text-xs font-bold uppercase text-blue-400 hover:text-blue-600 lg:ml-10 lg:text-base'
                href='/projects'
            >
                {'<- Back to Projects'}
            </Link>

            <h1 className='my-6 text-center text-xl font-semibold'>
                <span className='text-3xl font-semibold'>Case Study:</span>
                <br /> {project?.title}
            </h1>

            <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={600}
                className='mb-5 w-fit rounded-sm p-1 shadow-lg lg:max-w-screen-md'
                placeholder='blur'
                blurDataURL={project.image}
            />

            <section className='m-4 mx-2 my-10 transform rounded-md bg-gray-50 px-4 shadow-lg transition duration-500 ease-in-out hover:bg-white lg:mx-5 lg:px-6'>
                <div className={'rich-text-container my-6 max-w-screen-md'}>
                    <PortableText value={project.caseStudy} />
                </div>
            </section>
            
            <section>
                <h2 className='my-6 text-center text-xl font-semibold'>
                    Technology Stack Used:
                </h2>
                <div className='flex max-w-screen-md justify-center gap-2 px-4 py-2 lg:gap-8 lg:px-8'>
                    {project.tech.map((technology) => (
                        <div key={technology.name} className='group relative'>
                            <span className='absolute bottom-20 min-w-fit scale-0 rounded bg-slate-800 p-2 text-xs text-white transition-all group-hover:scale-100'>
                                {technology.name}
                            </span>
                            <Image
                                src={technology.icon}
                                alt={technology.name}
                                width={60}
                                height={60}
                                className='w-10 rounded-full bg-white p-1 shadow-md lg:p-2'
                            />
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default ProjectPage;
