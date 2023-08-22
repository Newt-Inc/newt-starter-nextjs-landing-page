import Image from 'next/image'
import styles from './styles.module.css'
import type { Features3Columns } from '@/types/page'

export function Features3Columns({ data }: { data: Features3Columns['data'] }) {
  const { features } = data
  return (
    <section className={styles.Feature4}>
      <div className={styles.Feature4_Inner}>
        {features.map((feature) => {
          return (
            <div key={feature._id} className={styles.Feature4_Item}>
              <Image
                src={feature.iconImage.src}
                width="41"
                height="41"
                alt=""
                className={styles.Feature4_Icon}
              />
              <div className={styles.Feature4_Data}>
                <h3
                  className={styles.Feature4_Title}
                  dangerouslySetInnerHTML={{ __html: feature.titleCopy }}
                ></h3>
                <p
                  className={styles.Feature4_Text}
                  dangerouslySetInnerHTML={{ __html: feature.text }}
                ></p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
