import { type SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { period } from './period'
import { material } from './material'
import { condition } from './condition'
import { coin } from './coin'
import { auction } from './auction'
import { faq } from './faq'
import { antiquity } from './antiquity'
import { siteSettings } from './siteSettings'
import { shippingOption } from './shipping'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, period, material, condition, coin, auction, faq, antiquity, siteSettings, shippingOption],
}
