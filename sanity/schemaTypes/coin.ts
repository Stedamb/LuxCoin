import { defineField, defineType } from 'sanity'

export const coin = defineType({
  name: 'coin',
  title: 'Coin',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}]
    }),
    defineField({
      name: 'period',
      title: 'Period',
      type: 'reference',
      to: [{type: 'period'}]
    }),
    defineField({
      name: 'material',
      title: 'Material',
      type: 'reference',
      to: [{type: 'material'}]
    }),
    defineField({
      name: 'condition',
      title: 'Condition',
      type: 'reference',
      to: [{type: 'condition'}]
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'weight',
      title: 'Weight',
      type: 'string',
    }),
    defineField({
        name: 'diameter',
        title: 'Diameter',
        type: 'string',
    }),
  ],
})
