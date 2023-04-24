import { defineType } from 'sanity';

const experience = defineType({
    name: 'experience',
    title: 'Experiences',
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
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'text' }],
        },
    ],
});

export default experience;
