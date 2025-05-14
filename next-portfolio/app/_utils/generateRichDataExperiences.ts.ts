import {
    Experience,
    HomePage,
    Project,
    Socials,
    Technology,
} from '../../sanity/sanity-utils';
import { getEndDate } from './getEndDate';
import { getStartDate } from './getStartDate';
import type { OrganizationRole, Person, WithContext } from 'schema-dts';

function mapExperienceToSchema(exp: Experience, isVolunteer: boolean = false) {
    const schema: OrganizationRole = {
        '@type': 'OrganizationRole',
        roleName: isVolunteer ? `Volunteer - ${exp.title}` : exp.title,
        description: exp.description.join(' '),
        startDate: getStartDate(exp.subTitle),
    };

    const end = getEndDate(exp.subTitle);
    if (end) schema.endDate = end;

    return schema;
}

const generateRichDataExperiences = ({
    experiences,
    technologies,
    homePage,
}: {
    experiences: Experience[];
    technologies: Technology[];
    homePage: HomePage;
}) => {
    const { title, subTitle, image, certification, resume } = homePage;

    const workSchema = experiences
        .filter((exp) => !exp.volunteer)
        .map((exp) => mapExperienceToSchema(exp));

    const volunteerSchema = experiences
        .filter((exp) => exp.volunteer)
        .map((exp) => mapExperienceToSchema(exp, true));

    const knowsAbout = technologies
        .filter((t) => t.active && !t.comingSoon)
        .map((t) => t.title);

    const schema: WithContext<Person> = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Veni Mitev',
        url: 'https://www.venimitev.dev',
        image: {
            '@type': 'ImageObject',
            url: image.image,
            description: image.alt,
        },
        description: `Veni Mitev - ${subTitle}`,
        hasOccupation: workSchema as unknown as any[], // <- stupid
        performerIn: volunteerSchema as unknown as any[], // <- stupid
        jobTitle: subTitle,
        alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Massachusetts Institute of Technology',
        },
        sameAs: [
            'https://www.linkedin.com/in/venimitev/',
            'https://github.com/VeniMitev/',
        ],
        knowsAbout,
        hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            name: 'Professional Certificate in Full Stack Development (MERN)',
            recognizedBy: {
                '@type': 'EducationalOrganization',
                name: 'Massachusetts Institute of Technology',
            },
            image: {
                '@type': 'ImageObject',
                url: certification.image,
                description: certification.alt,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://www.venimitev.dev',
            hasPart: {
                '@type': 'MediaObject',
                name: resume.title,
                encodingFormat: 'application/pdf',
                contentUrl: resume.file,
            },
        },
        workLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Seattle',
                addressRegion: 'WA',
                addressCountry: 'US',
            },
        },
    };

    return JSON.stringify(schema, null, 2);
};

export default generateRichDataExperiences;
