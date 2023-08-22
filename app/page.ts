import { notFound, redirect } from 'next/navigation'
import { getPages } from '@/lib/newt'

export default async function Page() {
  const { pages } = await getPages()
  if (pages.length === 0) {
    notFound()
  }

  const topPage = pages[0]
  redirect(`/pages/${topPage.slug}`)
}
