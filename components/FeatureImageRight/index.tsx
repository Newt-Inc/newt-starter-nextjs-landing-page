import Image from 'next/image'
import styles from './styles.module.css'
import type { FeatureImageRight } from '@/types/page'

export function FeatureImageRight({
  data,
}: {
  data: FeatureImageRight['data']
}) {
  const { titleCopy, text, image } = data
  return (
    <section className={styles.Feature2}>
      <div className={styles.Feature2_Inner}>
        <div className={styles.Feature2_Data}>
          <h3
            className={styles.Feature2_Title}
            dangerouslySetInnerHTML={{ __html: titleCopy }}
          ></h3>
          <p
            className={styles.Feature2_Text}
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
        </div>
        <div className={styles.Feature2_Image}>
          <Image src={image.src} width="407" height="248" alt="" />
        </div>
      </div>
    </section>
  )
}
