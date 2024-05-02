import { defineType } from 'sanity';

const technologies = defineType({
    name: 'technologies',
    title: 'Technologies',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
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
            name: 'sort',
            title: 'Sort',
            type: 'number',
        },
        {
            name: 'comingSoon',
            title: 'Coming Soon',
            type: 'boolean',
        },
        {
            name: 'active',
            title: 'Active',
            type: 'boolean',
        },
    ],
});

export default technologies;
