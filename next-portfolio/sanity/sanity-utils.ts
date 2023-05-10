import { createClient, groq } from 'next-sanity';
import { PortableTextBlock } from 'sanity';

export type Project = {
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
    sort: number;
    slug: string;
};

export type Experience = {
    company: string;
    title: string;
    subTitle: string;
    description: string[];
    sort: number;
    volunteer: boolean;
}

export type Technology = {
    title: string;
    icon: {
        image: string;
        alt: string;
    };
    sort: number;
    comingSoon: boolean;
}

export type HomePage = {
    title: string;
    subTitle: string;
    aboutMe: PortableTextBlock[];
    image: {
        image: string;
        alt: string;
    };
    certification: {
        image: string;
        alt: string;
    }
}

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1x7x7x7x',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
        apiVersion: '2023-04-23',
        useCdn: true
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
            },
            sort,
            slug
        }`
    );
}

export async function getSingleProject(slug: string): Promise<Project> {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1x7x7x7x',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
        apiVersion: '2023-04-23',
        useCdn: true
    });

    const data = await client.fetch(
        groq`*[_type == "project" && slug.current == "/${slug}"]{
            title,
            subTitle,
            description,
            "image": image.asset->url,
            github,
            projectUrl,
            "tech": tech[] {
                name,
                "icon": asset->url
            },
            sort
        }`
    );

    return data[0]
}

export async function getExperiences(): Promise<Experience[]> {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1x7x7x7x',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
        apiVersion: '2023-04-23',
        useCdn: true
    });

    return client.fetch(
        groq`*[_type == "experience"]{
            company,
            title,
            subTitle,
            description,
            sort,
            volunteer
        }`
    );
}

export async function getTechnologies(): Promise<Technology[]> {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1x7x7x7x',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
        apiVersion: '2023-04-23',
        useCdn: true
    });

    return client.fetch(
        groq`*[_type == "technologies"]{
            title,
            "icon": image {
                "image": asset->url,
                alt
            },
            sort,
            comingSoon
        }`
    );
}

export async function getHomePage(): Promise<HomePage> {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1x7x7x7x',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
        apiVersion: '2023-04-23',
        useCdn: true
    });

    return client.fetch(
        groq`*[_type == "homePage"][0]{
            title,
            subTitle,
            aboutMe,
            "image": image {
                "image": asset->url,
                alt
            },
            "certification": certification {
                "image": asset->url,
                alt
            }
        }`
    );
}