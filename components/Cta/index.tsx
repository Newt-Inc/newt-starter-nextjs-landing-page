import styles from './styles.module.css'
import type { Cta } from '@/types/page'

export function Cta({ data }: { data: Cta['data'] }) {
  const { titleCopy, text, ctaButton } = data
  return (
    <section className={styles.Cta}>
      <h3
        className={styles.Cta_Title}
        dangerouslySetInnerHTML={{ __html: titleCopy }}
      ></h3>
      {text && (
        <p
          className={styles.Cta_Text}
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
      )}
      <a
        className={styles.Cta_Button}
        href={ctaButton.url}
        rel="noreferrer noopener"
        target={ctaButton.newTab ? '_blank' : ''}
      >
        {ctaButton.label}
      </a>
    </section>
  )
}
