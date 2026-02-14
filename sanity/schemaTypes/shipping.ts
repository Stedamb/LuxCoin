import { defineField, defineType } from 'sanity'

export const shippingOption = defineType({
  name: 'shippingOption',
  title: 'Opzione di Spedizione',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'time',
        title: 'Tempi di consegna',
        type: 'string',
        placeholder: 'es: 3-5 Giorni Lavorativi'
    }),
    defineField({
        name: 'price',
        title: 'Costo',
        type: 'string',
        placeholder: 'es: Gratuita o €45,00'
    }),
    defineField({
        name: 'recommended',
        title: 'Consigliata',
        type: 'boolean',
        initialValue: false,
    }),
    defineField({
        name: 'features',
        title: 'Caratteristiche',
        type: 'array',
        of: [{type: 'string'}],
    }),
    defineField({
        name: 'icon',
        title: 'Icona',
        type: 'string',
        options: {
            list: [
                {title: 'Truck', value: 'truck'},
                {title: 'Plane', value: 'plane'},
                {title: 'Shield', value: 'shield'},
                {title: 'UserCheck', value: 'user-check'},
                {title: 'Lock', value: 'lock'},
            ]
        }
    })
  ],
})
