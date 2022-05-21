import styles from '../../styles/components/landings/MainApp.module.scss'
import { MdNavigateBefore, MdNavigateNext, MdKeyboardArrowDown } from 'react-icons/md'
import Link from 'next/link'
import SideNav from './SideNav'
import RectangularCard from '../common/RectangularCard'

export default function MainApp({ children }) {
  return (
    <>
      <SideNav />
      <div className={styles["skeleton"]}>
        <div className={styles["header"]}>
          <div className={styles["navProfile"]}>
            <div className={styles["returnForward"]}>
              <div className={styles["prevContainer"]}>
                <MdNavigateBefore />
              </div>
              <div className={styles["prevContainer"]}>
                <MdNavigateNext />
              </div>
            </div>
            <div className={styles["profileSettingsSection"]}>
              <div className={styles["profileSettingsSection"]}>
                <img src="https://scontent.fmex43-1.fna.fbcdn.net/v/t1.6435-9/151639503_4041220135923036_5518806947490909934_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0dfOVihnpdMAX_RN4ax&_nc_ht=scontent.fmex43-1.fna&oh=00_AT9ranDlz66NgReADD5MI2f4frPqnL54fMMGUKYVHSa_TQ&oe=62AD5FF1"
                  alt="" />
                <p>Hector Ulises Gonzalez Medel</p>
                <span><MdKeyboardArrowDown /></span>
              </div>
            </div>
            <div className={styles["dropProfileMenu"]}>
              <ul>
                <li><Link href="#"><a>Cuenta</a></Link><br /></li>
                <li><Link href="#"><a>Perffil</a></Link><br /></li>
                <li><Link href="#"><a>Cerrar sesión</a></Link><br /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles["children"]}>
          {children}
        </div>
      </div>
    </>
  )
}
