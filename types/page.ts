import type { Content, Media } from 'newt-client-js'

export interface Page extends Content {
  pageName: string
  slug: string
  meta?: {
    title?: string
    description?: string
    ogImage?: Media
  }
  sections: (
    | Hero
    | Logo
    | FeatureImageFull
    | FeatureImageRight
    | FeatureImageLeft
    | Features3Columns
    | Cta
    | Faq
  )[]
}

interface Section {
  _id: string
  type: string
}

interface Link {
  label: string
  url: string
  newTab: boolean
}

export interface Hero extends Section {
  type: 'Hero'
  data: {
    shoulderCopy: string
    titleCopy: string
    text?: string
    ctaButton: Link
    backgroundImage: Media
  }
}

export interface Logo extends Section {
  type: 'Logo'
  data: {
    text?: string
    logoImages: Media[]
  }
}

export interface FeatureImageFull extends Section {
  type: 'FeatureImageFull'
  data: {
    titleCopy: string
    text: string
    image: Media
  }
}

export interface FeatureImageRight extends Section {
  type: 'FeatureImageRight'
  data: {
    titleCopy: string
    text: string
    image: Media
  }
}

export interface FeatureImageLeft extends Section {
  type: 'FeatureImageLeft'
  data: {
    titleCopy: string
    text: string
    image: Media
  }
}

interface FeatureIcon {
  _id: string
  iconImage: Media
  titleCopy: string
  text: string
}

export interface Features3Columns extends Section {
  type: 'Features3Columns'
  data: {
    features: FeatureIcon[]
  }
}

export interface Cta extends Section {
  type: 'CTA'
  data: {
    titleCopy: string
    text?: string
    ctaButton: Link
  }
}

export interface FaqItem {
  _id: string
  question: string
  answer: string
}

export interface Faq extends Section {
  type: 'FAQ'
  data: {
    titleCopy: string
    items: FaqItem[]
  }
}
