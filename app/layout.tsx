import { Badge } from '@/components/Badge'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import './globals.css'
import styles from './layout.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js Landing Page Example with Newt',
  description: 'NewtとNext.jsを利用したランディングページです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <div className={styles.Wrapper}>
          <Header />
          <main>{children}</main>
          <Footer />
          <Badge />
        </div>
      </body>
    </html>
  )
}
