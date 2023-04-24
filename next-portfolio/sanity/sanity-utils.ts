import { createClient, groq } from 'next-sanity';
import { PortableTextBlock } from 'sanity';

type Project = {
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

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1x7x7x7x',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
        apiVersion: '2023-04-23',
    });

    return client.fetch(
        groq`*[_type == "project"]{
            title,
            subTitle,
            description,
            "image": image.asset->url,
            github,
            projectUrl,
            "tech": tech[] {
                name,
                "icon": asset->url
            }
        }`
    );
}
