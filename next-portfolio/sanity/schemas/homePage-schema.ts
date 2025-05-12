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
            name: 'resume',
            title: 'Resume',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    description: 'The title of your resume',
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: 'fileNameOnDownload',
                    title: 'File Name on Download',
                    description: 'The name of the file when downloaded',
                    type: 'string',
                    // validation with no spaces
                    validation: (Rule) =>
                        Rule.required().custom((value: string) => {
                            if (value.includes(' ')) {
                                return 'File name cannot contain spaces';
                            }
                            return true;
                        }),
                },
                {
                    name: 'file',
                    title: 'File',
                    type: 'file',
                    description: 'Upload your resume',
                    validation: (Rule) => Rule.required(),
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
        },
    ],
});

export default homePage;
