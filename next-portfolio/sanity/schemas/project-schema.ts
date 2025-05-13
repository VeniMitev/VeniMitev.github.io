import { defineType } from 'sanity';

const project = defineType({
    name: 'project',
    title: 'Projects',
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
            name: 'github',
            title: 'Github URL',
            type: 'url',
        },
        {
            name: 'projectUrl',
            title: 'Project URL',
            type: 'url',
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [
                {
                    name: 'technology',
                    title: 'Technology',
                    type: 'reference',
                    to: [{ type: 'technologies' }],
                },
            ],
        },
        {
            name: 'caseStudy',
            title: 'Case Study',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                            validation: (Rule) =>
                                Rule.required().error(
                                    'Alt Text is required for SEO purposes'
                                ),
                        },
                    ],
                },
            ],
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
        },
        {
            name: 'sort',
            title: 'Sort',
            type: 'number',
        },
    ],
});

export default project;
