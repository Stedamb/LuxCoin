import { defineField, defineType } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'Domande Frequenti',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Domanda',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Risposta',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'category',
        title: 'Categoria',
        type: 'string',
        options: {
            list: [
                {title: 'Generale', value: 'general'},
                {title: 'Spedizioni', value: 'shipping'},
                {title: 'Pagamenti', value: 'payments'},
            ]
        }
    })
  ],
})
