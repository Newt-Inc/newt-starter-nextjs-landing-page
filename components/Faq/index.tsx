import { FaqItem } from '@/components/FaqItem'
import styles from './styles.module.css'
import type { Faq } from '@/types/page'

export function Faq({ data }: { data: Faq['data'] }) {
  const { titleCopy, items } = data
  return (
    <section className={styles.Faq}>
      <div className={styles.Faq_Inner}>
        <h3
          className={styles.Faq_Title}
          dangerouslySetInnerHTML={{ __html: titleCopy }}
        ></h3>
        {items.map((item) => {
          return <FaqItem key={item._id} item={item} />
        })}
      </div>
    </section>
  )
}
