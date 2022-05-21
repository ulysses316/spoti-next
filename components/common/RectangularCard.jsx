import styles from '../../styles/components/common/Cards.module.scss'
import { AiFillPlayCircle } from 'react-icons/ai'
import Link from 'next/link'

export default function RectangularCard() {
  return (
    <div className={styles["rectangularCard"]}>
      <div>
        <Link href="#">
          <a>
            <div className={`${styles["recently-items"]}`}>
              <div className={styles["caratula-recently"]} />
              <div>
                <p>Descubrimiento semanal</p>
              </div>
              <span className={styles["play-widget"]}><AiFillPlayCircle /></span>
            </div>
          </a>
        </Link>
      </div>
    </div>

  )
}
