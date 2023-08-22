import Image from 'next/image'
import styles from './styles.module.css'
import type { FeatureImageLeft } from '@/types/page'

export function FeatureImageLeft({ data }: { data: FeatureImageLeft['data'] }) {
  const { titleCopy, text, image } = data
  return (
    <section className={styles.Feature3}>
      <div className={styles.Feature3_Inner}>
        <div className={styles.Feature3_Image}>
          <Image
            src={image.src}
            width="407"
            height="248"
            alt=""
            className={styles.Feature3_Image}
          />
        </div>
        <div className={styles.Feature3_Data}>
          <h3
            className={styles.Feature3_Title}
            dangerouslySetInnerHTML={{ __html: titleCopy }}
          ></h3>
          <p
            className={styles.Feature3_Text}
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
        </div>
      </div>
    </section>
  )
}
