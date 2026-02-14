import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Impostazioni Sito',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo Sito',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descrizione Sito (SEO)',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'email',
        title: 'Email di contatto',
        type: 'string',
    }),
    defineField({
        name: 'phone',
        title: 'Telefono',
        type: 'string',
    }),
    defineField({
        name: 'address',
        title: 'Indirizzo',
        type: 'text',
    }),
    defineField({
        name: 'vatNumber',
        title: 'Partita IVA',
        type: 'string',
    }),
    defineField({
        name: 'socialLinks',
        title: 'Social Links',
        type: 'array',
        of: [
            {
                type: 'object',
                fields: [
                    { name: 'platform', title: 'Piattaforma', type: 'string', options: { list: ['Instagram', 'Facebook', 'Twitter', 'LinkedIn'] } },
                    { name: 'url', title: 'URL', type: 'url' }
                ]
            }
        ]
    }),
    defineField({
      name: 'privacyPolicy',
      title: 'Privacy Policy',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'termsAndConditions',
      title: 'Termini e Condizioni',
      type: 'array',
      of: [{type: 'block'}]
    }),
  ],
})
