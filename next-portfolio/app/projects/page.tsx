import Project from '../../components/Project';
import data from '../../data/projects.json';

const Projects = () => {
    return (
        <>
            <h1 className='py-6 text-center'>
                <span className='text-3xl font-semibold'>Projects</span>
            </h1>
            <div className='3xl:grid-cols-3 mx-auto grid max-w-5xl grid-cols-1 items-center justify-center gap-12 md:grid-cols-2'>
                {data.map((project) => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </>
    );
};

export default Projects;
