import styles from '../../styles/components/common/ModalOptions.module.scss'
import Link from 'next/link'

export default function ModalOptions() {
    return (
        <div className={styles["modal-options"]}>
            <ul>
                <li><Link href="#"><a>Cuenta</a></Link><br /></li>
                <li><Link href="#"><a>Perffil</a></Link><br /></li>
                <li><Link href="#"><a>Cerrar sesión</a></Link><br /></li>
            </ul>
        </div>
    )
}
