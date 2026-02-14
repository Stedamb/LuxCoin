import { groq } from 'next-sanity'

// Get all coins with their related data
export const coinsQuery = groq`*[_type == "coin"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  images,
  description,
  category->{title, slug},
  period->{title, slug},
  material->{title, slug},
  condition->{title, slug},
  price,
  year,
  weight,
  diameter
}`

// Get a single coin by slug
export const coinBySlugQuery = groq`*[_type in ["coin", "antiquity"] && slug.current == $slug][0] {
  _id,
  title,
  slug,
  images,
  description,
  category->{title, slug, description},
  period->{title, slug, description},
  material->{title, slug},
  condition->{title, slug, description},
  price,
  year,
  weight,
  diameter
}`

// Get all categories
export const categoriesQuery = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`

// Get all periods
export const periodsQuery = groq`*[_type == "period"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`

// Get all materials
export const materialsQuery = groq`*[_type == "material"] | order(title asc) {
  _id,
  title,
  slug
}`

// Get all conditions
export const conditionsQuery = groq`*[_type == "condition"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`

// Get all auctions
export const auctionsQuery = groq`*[_type == "auction"] | order(startDate desc) {
  _id,
  title,
  slug,
  description,
  startDate,
  endDate,
  link,
  mainImage
}`

// Get upcoming auctions
export const upcomingAuctionsQuery = groq`*[_type == "auction" && endDate > now()] | order(startDate asc) {
  _id,
  title,
  slug,
  description,
  startDate,
  endDate,
  link,
  mainImage
}`

// Get all FAQs
export const faqsQuery = groq`*[_type == "faq"] | order(_createdAt asc) {
  _id,
  question,
  answer,
  category
}`

// Get FAQs by category
export const faqsByCategoryQuery = groq`*[_type == "faq" && category == $category] | order(_createdAt asc) {
  _id,
  question,
  answer,
  category
}`

// Get coins by category
export const coinsByCategoryQuery = groq`*[_type == "coin" && category._ref == $categoryId] | order(_createdAt desc) {
  _id,
  title,
  slug,
  images,
  description,
  category->{title, slug},
  period->{title, slug},
  material->{title, slug},
  condition->{title, slug},
  price,
  year,
  weight,
  diameter
}`

// Get coins by period
export const coinsByPeriodQuery = groq`*[_type == "coin" && period._ref == $periodId] | order(_createdAt desc) {
  _id,
  title,
  slug,
  images,
  description,
  category->{title, slug},
  period->{title, slug},
  material->{title, slug},
  condition->{title, slug},
  price,
  year,
  weight,
  diameter
}`
// Get items for showcase (monete and antichita with showcase flag)
export const showcaseQuery = groq`*[_type in ["coin", "antiquity"] && showcase == true] | order(_createdAt desc) {
  _id,
  _type,
  title,
  slug,
  images,
  description,
  category->{title, slug},
  period->{title, slug},
  material->{title, slug},
  condition->{title, slug},
  price,
  year,
  weight,
  diameter
}`

// Get site settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  title,
  description,
  logo,
  email,
  phone,
  address,
  vatNumber,
  socialLinks,
  privacyPolicy,
  termsAndConditions
}`

// Get all shipping options
export const shippingOptionsQuery = groq`*[_type == "shippingOption"] | order(recommended desc, title asc) {
  _id,
  title,
  description,
  time,
  price,
  recommended,
  features,
  icon
}`

// Get all reviews
export const reviewsQuery = groq`*[_type == "review"] | order(date desc) {
  _id,
  name,
  text,
  rating,
  date,
  link,
  platform
}`

