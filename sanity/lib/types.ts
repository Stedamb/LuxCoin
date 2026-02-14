import { PortableTextBlock } from 'sanity'

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
}

export interface Period {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
}

export interface Material {
  _id: string
  title: string
  slug: {
    current: string
  }
}

export interface Condition {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
}

export interface Coin {
  _id: string
  _type: 'coin' | 'antiquity'
  title: string
  slug: {
    current: string
  }
  images?: Array<{
    asset: {
      _ref: string
      _type: 'reference'
    }
    _type: 'image'
  }>
  description?: PortableTextBlock[]
  category?: Category
  period?: Period
  material?: Material
  condition?: Condition
  price?: number
  year?: string
  weight?: string
  diameter?: string
  showcase?: boolean
}

export type Antiquity = Coin

export interface Auction {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  startDate?: string
  endDate?: string
  link?: string
  mainImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    _type: 'image'
  }
}

export interface FAQ {
  _id: string
  question: string
  answer: PortableTextBlock[]
  category?: 'general' | 'shipping' | 'payments'
}

export interface SiteSettings {
  title?: string
  description?: string
  logo?: any
  email?: string
  phone?: string
  address?: string
  vatNumber?: string
  socialLinks?: Array<{
    platform: string
    url: string
  }>
  privacyPolicy?: PortableTextBlock[]
  termsAndConditions?: PortableTextBlock[]
}

export interface ShippingOption {
  _id: string
  title: string
  description: string
  time?: string
  price?: string
  recommended?: boolean
  features?: string[]
  icon?: string
}

export interface Review {
  _id: string
  name: string
  text: string
  rating: number
  date: string
  link?: string
  platform?: string
}

