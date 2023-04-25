import { defineType } from 'sanity';

const homePage = defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subTitle',
            title: 'Sub Title',
            type: 'string',
        },
        {
            name: 'aboutMe',
            title: 'About Me',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                },
            ],
        },
        {
            name: 'certification',
            title: 'Certification',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                },
            ],
        }
    ],
});

export default homePage;