import styles from '../../styles/components/common/Cards.module.scss'
import Image from 'next/image'

export default function GenderCards() {
  return (
    <div className={styles["card-frame"]}>
        <h3>Latina</h3>
        <div className={styles["rotate-image"]}>
            <img src="/264x264.jpg"/>
        </div>
    </div>
  )
}
