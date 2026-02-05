import { groq } from 'next-sanity'

// Get all coins with filters
export const coinsWithFiltersQuery = groq`{
  "coins": *[_type == "coin"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    images,
    description,
    category->{_id, title, slug},
    period->{_id, title, slug},
    material->{_id, title, slug},
    condition->{_id, title, slug},
    price,
    year,
    weight,
    diameter
  },
  "categories": *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug
  },
  "periods": *[_type == "period"] | order(title asc) {
    _id,
    title,
    slug
  },
  "materials": *[_type == "material"] | order(title asc) {
    _id,
    title,
    slug
  },
  "conditions": *[_type == "condition"] | order(title asc) {
    _id,
    title,
    slug
  }
}`

// Get coins with dynamic filters applied
export function buildFilteredCoinsQuery(filters: {
  categoryIds?: string[]
  periodIds?: string[]
  materialIds?: string[]
  conditionIds?: string[]
}) {
  const conditions: string[] = ['_type == "coin"']
  
  if (filters.categoryIds && filters.categoryIds.length > 0) {
    conditions.push(`category._ref in [${filters.categoryIds.map(id => `"${id}"`).join(', ')}]`)
  }
  
  if (filters.periodIds && filters.periodIds.length > 0) {
    conditions.push(`period._ref in [${filters.periodIds.map(id => `"${id}"`).join(', ')}]`)
  }
  
  if (filters.materialIds && filters.materialIds.length > 0) {
    conditions.push(`material._ref in [${filters.materialIds.map(id => `"${id}"`).join(', ')}]`)
  }
  
  if (filters.conditionIds && filters.conditionIds.length > 0) {
    conditions.push(`condition._ref in [${filters.conditionIds.map(id => `"${id}"`).join(', ')}]`)
  }
  
  const whereClause = conditions.join(' && ')
  
  return groq`*[${whereClause}] | order(_createdAt desc) {
    _id,
    title,
    slug,
    images,
    description,
    category->{_id, title, slug},
    period->{_id, title, slug},
    material->{_id, title, slug},
    condition->{_id, title, slug},
    price,
    year,
    weight,
    diameter
  }`
}
