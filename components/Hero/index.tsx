import Image from 'next/image'
import styles from './styles.module.css'
import type { Hero } from '@/types/page'

export function Hero({ data }: { data: Hero['data'] }) {
  const { shoulderCopy, titleCopy, text, ctaButton, backgroundImage } = data
  return (
    <section className={styles.Hero}>
      <div className={styles.Hero_Inner}>
        <div className={styles.Hero_Data}>
          <p
            className={styles.Hero_Tagline}
            dangerouslySetInnerHTML={{ __html: shoulderCopy }}
          ></p>
          <h2
            className={styles.Hero_Title}
            dangerouslySetInnerHTML={{ __html: titleCopy }}
          ></h2>
          {text && (
            <p
              className={styles.Hero_Text}
              dangerouslySetInnerHTML={{ __html: text }}
            ></p>
          )}
          <a
            className={styles.Hero_Button}
            href={ctaButton.url}
            rel="noreferrer noopener"
            target={ctaButton.newTab ? '_blank' : ''}
          >
            {ctaButton.label}
          </a>
        </div>
        <div className={styles.Hero_Image}>
          <Image src={backgroundImage.src} width="540" height="370" alt="" />
        </div>
      </div>
    </section>
  )
}
