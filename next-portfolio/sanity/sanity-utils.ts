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
    caseStudy: PortableTextBlock[];
    github: string;
    projectUrl: string;
    sort: number;
    slug: {
        current: string;
    };
};

export type Experience = {
    company: string;
    title: string;
    subTitle: string;
    description: string[];
    sort: number;
    volunteer: boolean;
};

export type Technology = {
    title: string;
    icon: {
        image: string;
        alt: string;
    };
    sort: number;
    comingSoon: boolean;
    active: boolean;
};

export type Socials = {
    title: string;
    icon: {
        image: string;
        alt: string;
    };
    url: string;
    sort: number;
    active: boolean;
};

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
    };
};

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1x7x7x7x',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2023-04-23',
    useCdn: true,
});

export async function getProjects(): Promise<Project[]> {
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
            caseStudy,
        }`
    );

    return data[0];
}

export async function getExperiences(): Promise<Experience[]> {
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
    return client.fetch(
        groq`*[_type == "technologies"]{
            title,
            "icon": image {
                "image": asset->url,
                alt
            },
            sort,
            comingSoon,
            active
        }`
    );
}

export async function getSocials(): Promise<Socials[]> {
    return client.fetch(
        groq`[_type == "socials"]{
            title,
            "icon": image {
                "image": asset -> url,
                alt
            }, 
            url,
            sort, 
            active
        }`
    )
}


export async function getHomePage(): Promise<HomePage> {
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

