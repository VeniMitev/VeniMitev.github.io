import { Project, getSingleProject } from '../../../sanity/sanity-utils';

// TODO: Implement page for every project for case studies, info, etc.

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
    const project = await getSingleProject(params.slug);

    return <h1>My Project Page: {project.title}</h1>;
};

export default ProjectPage;
