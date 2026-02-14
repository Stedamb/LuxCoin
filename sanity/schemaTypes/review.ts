import { defineField, defineType } from 'sanity'

export const review = defineType({
  name: 'review',
  title: 'Recensione',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome Cliente',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Testo della Recensione',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Valutazione (1-5)',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      name: 'date',
      title: 'Data',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link alla Recensione Originale (es: Google, TripAdvisor)',
      type: 'url',
    }),
    defineField({
        name: 'platform',
        title: 'Piattaforma',
        type: 'string',
        options: {
            list: [
                {title: 'Google', value: 'google'},
                {title: 'Trustpilot', value: 'trustpilot'},
                {title: 'Facebook', value: 'facebook'},
                {title: 'Altro', value: 'other'},
            ]
        }
    })
  ],
})
