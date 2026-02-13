import { defineField, defineType } from 'sanity'

export const antiquity = defineType({
  name: 'antiquity',
  title: 'Antichità',
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
      name: 'images',
      title: 'Immagini',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{type: 'category'}]
    }),
    defineField({
      name: 'period',
      title: 'Periodo',
      type: 'reference',
      to: [{type: 'period'}]
    }),
    defineField({
      name: 'material',
      title: 'Materiale',
      type: 'reference',
      to: [{type: 'material'}]
    }),
    defineField({
      name: 'condition',
      title: 'Condizione',
      type: 'reference',
      to: [{type: 'condition'}]
    }),
    defineField({
      name: 'price',
      title: 'Prezzo',
      type: 'number',
    }),
    defineField({
      name: 'year',
      title: 'Anno',
      type: 'string',
    }),
    defineField({
      name: 'weight',
      title: 'Peso',
      type: 'string',
    }),
    defineField({
      name: 'diameter',
      title: 'Diametro',
      type: 'string',
    }),
  ],
})
