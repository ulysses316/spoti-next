import styles from '../../styles/components/landings/AlbumSongs.module.scss'
import Image from 'next/image'

// Icons
import { AiFillPlayCircle, AiOutlineHeart, AiOutlineClockCircle } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

export default function AlbumSongs() {
  return (
    <>
      <div className={styles["headerAlbum"]}>
        <div className={styles["image-album"]}>
          <Image src="/264x264.jpg" width={232} height={232} />
        </div>
        <div className={styles["info-album"]}>
          <p>Álbum</p>
          <h1>Días De Fuego</h1>
          <p className={styles["album-info"]}><img src="#" alt="Artista" /> Odisseo <span>• 2014 •</span> 11 canciones, 38 min 20s</p>
        </div>
      </div>
      <div className={styles["table-songs-section"]}>
        <div className={styles["table-song-content"]}>
          <div className={styles["toggle-options-album"]}>
            <AiFillPlayCircle className='play-widget' />
            <AiOutlineHeart className={styles['icons-general-styles']} />
            <BsThreeDots className={styles['icons-general-styles']} />
          </div>
          <div className={styles["table"]}>            
            <table className={styles["tables"]}>
              <tbody>
                <tr>
                  <th className={styles["first-column"]}>#</th>
                  <th className={`${styles["second-column"]} ${styles["no-weight"]}`}>Titulo</th>
                  <th className={styles["three-column"]}><AiOutlineClockCircle /></th>
                </tr>
                <tr>
                  <td className={styles["first-column"]}>1</td>
                  <td className={styles["second-column"]}>
                    <p>Dominio</p>
                    <p>Odisseo</p>
                  </td>
                  <td className={styles["three-column"]}>3:16</td>
                </tr>
              </tbody>
            </table>            
          </div>
        </div>
      </div>
    </>
  )
}
