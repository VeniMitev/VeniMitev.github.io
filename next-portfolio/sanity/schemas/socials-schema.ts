import { defineType } from 'sanity';

const socials = defineType({
    name: 'socials',
    title: 'Social Media',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'icon',
            title: 'Icon',
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
            name: 'url',
            title: 'Social Media Link',
            type: 'url'
        }, 
        {
            name: 'sort',
            title: 'Sort',
            type: 'number',
        },
        {
            name: 'active',
            title: 'Active',
            type: 'boolean',
        },
    ],
});

export default socials;