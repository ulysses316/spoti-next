import styles from '../../styles/components/common/Cards.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillPlayCircle } from 'react-icons/ai'

// className={styles[""]}
export default function SquareCard() {
  return (
    <Link href="">
        <div className={styles["squareCard"]}>
          <div className={styles["square-card-body"]}>
            <div className={styles["image-container"]}>
              <Image width={166} height={166} src="/264x264.jpg"></Image>
              <span className={styles['play-widget-square']}><AiFillPlayCircle/></span>
            </div>
            <p>Like a 19th Century Villain</p>
            <p>De Hector Ulises Gonzalez Medel</p>
          </div>
        </div>
    </Link>
  )
}
