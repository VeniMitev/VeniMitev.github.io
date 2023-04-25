import { defineType } from 'sanity';

const experience = defineType({
    name: 'experience',
    title: 'Experiences',
    type: 'document',
    fields: [
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
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
        {
            name: 'sort',
            title: 'Sort',
            type: 'number',
        },
        {
            name: 'volunteer',
            title: 'Volunteer',
            type: 'boolean',
        }
    ],
});

export default experience;
