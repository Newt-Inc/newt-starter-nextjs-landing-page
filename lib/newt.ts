import { createClient } from 'newt-client-js'
import { cache } from 'react'
import type { AppMeta, GetContentsQuery } from 'newt-client-js'
import type { Page } from '@/types/page'

const client = createClient({
  spaceUid: process.env.NEXT_PUBLIC_NEWT_SPACE_UID + '',
  token: process.env.NEXT_PUBLIC_NEWT_API_TOKEN + '',
  apiType: process.env.NEXT_PUBLIC_NEWT_API_TYPE as 'cdn' | 'api',
})

export const getApp = cache(async (): Promise<AppMeta> => {
  const app = await client.getApp({
    appUid: process.env.NEXT_PUBLIC_NEWT_APP_UID + '',
  })
  return app
})

export const getPages = cache(
  async (
    query?: GetContentsQuery,
  ): Promise<{ pages: Page[]; total: number }> => {
    const { items: pages, total } = await client.getContents<Page>({
      appUid: process.env.NEXT_PUBLIC_NEWT_APP_UID + '',
      modelUid: process.env.NEXT_PUBLIC_NEWT_PAGE_MODEL_UID + '',
      query: {
        depth: 2,
        ...query,
      },
    })
    return {
      pages,
      total,
    }
  },
)

export const getPage = cache(async (slug: string): Promise<Page | null> => {
  if (!slug) return null

  const page = await client.getFirstContent<Page>({
    appUid: process.env.NEXT_PUBLIC_NEWT_APP_UID + '',
    modelUid: process.env.NEXT_PUBLIC_NEWT_PAGE_MODEL_UID + '',
    query: {
      depth: 2,
      slug,
    },
  })
  return page
})
