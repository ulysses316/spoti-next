import styles from '../../styles/components/common/Cards.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function GenderCards() {
    return (
        <Link href="#">
            <div className={styles["card-frame"]}>
                <h3>Podcast</h3>
                <div className={styles["rotate-image"]}>
                    <img src="/264x264.jpg" />
                </div>
            </div>
        </Link>
    )
}
