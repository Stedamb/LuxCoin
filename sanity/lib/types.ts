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
