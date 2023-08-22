import Image from 'next/image'
import styles from './styles.module.css'
import type { FeatureImageFull } from '@/types/page'

export function FeatureImageFull({ data }: { data: FeatureImageFull['data'] }) {
  const { titleCopy, text, image } = data
  return (
    <section className={styles.Feature1}>
      <h3
        className={styles.Feature1_Title}
        dangerouslySetInnerHTML={{ __html: titleCopy }}
      ></h3>
      <p
        className={styles.Feature1_Text}
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
      <Image
        src={image.src}
        width="980"
        height="307"
        alt=""
        className={styles.Feature1_Image}
      />
    </section>
  )
}
