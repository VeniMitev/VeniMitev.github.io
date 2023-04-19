import Link from 'next/link';
import Image from 'next/image';

type ProjectProps = {
    title: string;
    description: string;
    image: string;
    technologies: {
        name: string;
        icon: string;
    }[];
    links: {
        code: string;
        project: string;
    };
};

const Project = ({
    title,
    description,
    image,
    technologies,
    links,
}: ProjectProps) => {
    return (
        <div className='grid  h-full w-11/12 max-w-xl content-between justify-self-center rounded-sm bg-white shadow-lg xl:rounded-lg'>
            <div>
                <h1 className='m-2 px-8 text-xl font-semibold'>{title}</h1>

                <Image
                    src={image}
                    alt={title}
                    width={1000}
                    height={600}
                    className='mb-5'
                />

                <p className='px-8'>{description}</p>
            </div>

            <div>
                <div className='flex justify-center gap-8 px-8 py-2 mt-4'>
                        {technologies.map((technology) => (
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
                    <Link
                        href={links.project}
                        className='my-4 mx-6 block rounded-sm bg-slate-900 px-8 py-2 text-center text-slate-200 hover:bg-slate-200 hover:text-slate-900'
                    >
                        View Project
                    </Link>

                    <Link
                        href={links.code}
                        className='my-4 mx-6 block rounded-sm bg-slate-900 px-8 py-2 text-center text-slate-200 hover:bg-slate-200 hover:text-slate-900'
                    >
                        View Code
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;
