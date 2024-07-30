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
    _updatedAt: string;
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

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const formattedMonth = month < 10 ? `0${month}` : month;
const day = today.getDate();
const formattedDay = day < 10 ? `0${day}` : day;

const todayString = `${year}-${formattedMonth}-${formattedDay}`;

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1x7x7x7x',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: todayString,
    useCdn: false,
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
            slug,
            _updatedAt
        }`,
        {},
        { cache: 'no-cache' }
    );
}

export async function getSingleProject(slug: string): Promise<Project> {
    const data = await client.fetch(
        groq`*[_type == "project" && (slug.current == "/${slug}" || slug.current == "${slug}")]{
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
        }`,
        {},
        { cache: 'no-cache' }
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
        }`,
        {},
        { cache: 'no-cache' }
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
        }`,
        {},
        { cache: 'no-cache' }
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
        }`,
        {},
        { cache: 'no-cache' }
    );
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
        }`,
        {},
        { cache: 'no-cache' }
    );
}
