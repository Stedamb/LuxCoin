import { defineField, defineType } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
            list: [
                {title: 'General', value: 'general'},
                {title: 'Shipping', value: 'shipping'},
                {title: 'Payments', value: 'payments'},
            ]
        }
    })
  ],
})
