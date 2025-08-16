import Link from 'next/link';
import Image from 'next/image';
import { getSingleProject } from '../../../../sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';
import TechWithTooltip from '@/components/TechWithTooltip';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
    const resolvedSlug = (await params).slug;

    const project = await getSingleProject(resolvedSlug);

    return {
        title: `Project: ${project?.title} | Veni Mitev | Web Developer`,
        description:
            project?.subTitle ||
            'Explore the details of this project, including its technologies and case study.',
        alternates: {
            canonical: `/projects/${resolvedSlug}`,
        },
        authors: [
            {
                name: 'Veni Mitev',
                url: 'https://venimitev.dev',
            },
        ],
        creator: 'Veni Mitev',
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: `Project: ${project?.title} | Veni Mitev | Web Developer`,
            description:
                project?.subTitle || 'Explore the details of this project.',
            images: [
                {
                    url: project?.image,
                    alt: project?.title,
                },
            ],
        },
    };
};

// TODO: Implement page for every project for case studies, info, etc.
const ProjectPage = async (props: { params: Promise<{ slug: string }> }) => {
    const params = await props.params;
    const project = await getSingleProject(params.slug);

    if (!project) {
        return <BackToProjects />;
    }

    return (
        <div className='px-2'>
            <BackToProjects />

            <section className='flex flex-col gap-8 items-center justify-center'>
                <div className='flex w-full max-w-screen-lg flex-col items-center gap-4 justify-center'>
                    <h1 className='text-center text-xl font-semibold'>
                        <span className='text-3xl font-semibold'>
                            Case Study:
                        </span>
                        <br /> {project?.title}
                    </h1>

                    {project?.image && (
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={1920}
                            height={720}
                            className='rounded-md shadow-lg w-full'
                            loading='eager'
                        />
                    )}
                </div>

                <div className='rounded-md bg-gray-50 px-4 py-8 shadow-lg space-y-10'>
                    <div className={'rich-text-container max-w-screen-md'}>
                        <PortableText value={project.caseStudy} />
                    </div>

                    <h2 className='my-6 text-center text-xl font-semibold'>
                        Technology Stack Used:
                    </h2>

                    <div className='flex max-w-screen-md justify-center gap-2 px-4 lg:gap-8 lg:px-8'>
                        {project.technologies.map((technology, index) => (
                            <TechWithTooltip
                                key={index}
                                technology={technology}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const BackToProjects = () => {
    return (
        <Button asChild variant='outline'>
            <Link href='/projects' prefetch>
                <ChevronLeft /> Back to Projects
            </Link>
        </Button>
    );
};

export default ProjectPage;
