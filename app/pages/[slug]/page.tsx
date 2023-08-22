import { notFound } from 'next/navigation'
import { Cta } from '@/components/Cta'
import { Faq } from '@/components/Faq'
import { FeatureImageFull } from '@/components/FeatureImageFull'
import { FeatureImageLeft } from '@/components/FeatureImageLeft'
import { FeatureImageRight } from '@/components/FeatureImageRight'
import { Features3Columns } from '@/components/Features3Columns'
import { Hero } from '@/components/Hero'
import { Logo } from '@/components/Logo'
import { getPages, getPage } from '@/lib/newt'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const { pages } = await getPages()
  return pages.map((page) => ({
    slug: page.slug,
  }))
}
export const dynamicParams = false

export async function generateMetadata({ params }: Props) {
  const { slug } = params
  const page = await getPage(slug)

  const title = page?.meta?.title || page?.pageName
  const description = page?.meta?.description
  const ogImage = page?.meta?.ogImage?.src

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      title,
      description,
      images: ogImage,
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = params
  const page = await getPage(slug)
  if (!page) {
    notFound()
  }

  return (
    <>
      {page.sections.map((section) => {
        switch (section.type) {
          case 'Hero':
            return <Hero key={section._id} data={section.data} />
          case 'Logo':
            return <Logo key={section._id} data={section.data} />
          case 'FeatureImageFull':
            return <FeatureImageFull key={section._id} data={section.data} />
          case 'FeatureImageRight':
            return <FeatureImageRight key={section._id} data={section.data} />
          case 'FeatureImageLeft':
            return <FeatureImageLeft key={section._id} data={section.data} />
          case 'Features3Columns':
            return <Features3Columns key={section._id} data={section.data} />
          case 'CTA':
            return <Cta key={section._id} data={section.data} />
          case 'FAQ':
            return <Faq key={section._id} data={section.data} />
          default:
            break
        }
      })}
    </>
  )
}
