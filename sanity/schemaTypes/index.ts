import { type SchemaTypeDefinition } from 'sanity'
import { category } from './category'
import { period } from './period'
import { material } from './material'
import { condition } from './condition'
import { coin } from './coin'
import { auction } from './auction'
import { faq } from './faq'
import { antiquity } from './antiquity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, period, material, condition, coin, auction, faq, antiquity],
}
