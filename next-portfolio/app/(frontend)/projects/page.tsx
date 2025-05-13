// import Project from '../../components/Project';
import Project from '../../../components/Project';
import { getProjects } from '../../../sanity/sanity-utils';

const Projects = async () => {
    const projects = await getProjects();

    if (!projects) {
        return (
            <div className='mx-auto max-w-6xl px-2'>
                <h1 className='py-6 text-center text-3xl font-semibold'>
                    Projects
                </h1>
                <p className='text-center'>No projects found</p>
            </div>
        );
    }

    return (
        <>
            <h1 className='py-6 text-center'>
                <span className='text-3xl font-semibold'>Projects</span>
            </h1>
            <div className='mx-auto px-2 grid max-w-6xl grid-cols-1 items-center justify-center gap-6 md:grid-cols-2'>
                {projects
                    .sort((a, b) => a.sort - b.sort)
                    .map((project) => (
                        <Project key={project.title} {...project} />
                    ))}
            </div>
        </>
    );
};

export default Projects;
