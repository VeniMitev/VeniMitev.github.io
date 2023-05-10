import {defineType} from 'sanity'

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
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
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
      type: 'string',
    },
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'string',
    },
    {
      name: 'tech',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Technology Image',
          type: 'image',
          fields: [
            {
              name: 'name',
              title: 'Technology Name',
              type: 'string',
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
})

export default project
