import styles from '../../styles/components/common/Player.module.scss'

export default function Player() {
  return (
    <div className={styles["player"]}>
      <div className={styles["player-album-info"]}>
        <p>a</p>
      </div>
      <div className={styles["player-controls"]}>
        <p>b</p>
      </div>
      <div className={styles["player-options"]}>
        <p>c</p>  
      </div>      
    </div>
  )
}
