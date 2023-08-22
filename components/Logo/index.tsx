import Image from 'next/image'
import styles from './styles.module.css'
import type { Logo } from '@/types/page'

export function Logo({ data }: { data: Logo['data'] }) {
  const { text, logoImages } = data
  return (
    <section className={styles.Logos}>
      {text && (
        <h3
          className={styles.Logos_Title}
          dangerouslySetInnerHTML={{ __html: text }}
        ></h3>
      )}
      <ul className={styles.Logos_List}>
        {logoImages.map((logo) => {
          return (
            <li key={logo._id}>
              <Image src={logo.src} width="125" height="46" alt="" />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
