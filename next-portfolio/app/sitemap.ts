import { MetadataRoute } from 'next';
import { getProjects } from '../sanity/sanity-utils';

async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const projects = await getProjects();

    const projectUrls = projects.map((project) => {
        console.log(project._updatedAt);

        return {
            url: `https://www.venimitev.dev/projects${project.slug.current}`,
            lastModified: project._updatedAt,
            priority: 0.8,
        };
    });

    return [
        {
            url: 'https://www.venimitev.dev/',
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://www.venimitev.dev/projects',
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: 'https://www.venimitev.dev/contact',
            lastModified: new Date(),
            priority: 0.9,
        },
        ...projectUrls,
    ];
}

export default sitemap;
