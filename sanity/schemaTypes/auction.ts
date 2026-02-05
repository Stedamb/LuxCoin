import { defineField, defineType } from 'sanity'

export const auction = defineType({
  name: 'auction',
  title: 'Asta',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
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
        title: 'Data Inizio',
        type: 'datetime'
    }),
    defineField({
        name: 'endDate',
        title: 'Data Fine',
        type: 'datetime'
    }),
    defineField({
        name: 'link',
        title: 'Link',
        type: 'url'
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Immagine Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
