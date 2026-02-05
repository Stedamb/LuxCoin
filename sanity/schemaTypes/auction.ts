import { defineField, defineType } from 'sanity'

export const auction = defineType({
  name: 'auction',
  title: 'Auction',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'startDate',
        title: 'Start Date',
        type: 'datetime'
    }),
    defineField({
        name: 'endDate',
        title: 'End Date',
        type: 'datetime'
    }),
    defineField({
        name: 'link',
        title: 'Link',
        type: 'url'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
