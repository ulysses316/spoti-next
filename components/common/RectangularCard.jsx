import styles from '../../styles/components/common/Cards.module.scss'
import AiFillPlayCircle from 'react-icons/ai'

// className={styles[""]}
export default function SquareCard() {
  return (
    <div className={styles["rectangularCard"]}>
      <div className={styles["caratula-recently"]}></div>
      <div>
        <p>Descubrimiento semanal</p>
      </div>
      <span class={styles["play-widget"]}><AiFillPlayCircle/></span>
    </div>
  )
}
