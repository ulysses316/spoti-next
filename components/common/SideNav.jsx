import styles from '../../styles/components/common/sidenav.module.scss'
import Link from 'next/link';
import Image from 'next/image';
// Icons
import { AiFillHeart, AiFillHome } from 'react-icons/ai';
import { GoPlus } from 'react-icons/go';
import {BsFillBookmarkFill, BsSearch} from 'react-icons/bs'

export default function SideNav() {
    return (
        <div className={styles["side-nav"]}>
            <nav>
                <div>
                    <Image width={131} height={40} src="/spotify-logo.png" alt='Spotify'/>
                </div>
                <div>
                    <Link href="#">
                        <p className={styles["vertical-aligment"]}>
                            <span><AiFillHome/> </span>Inicio
                        </p>
                    </Link>
                    <Link href="#">
                        <p className={styles["vertical-aligment"]}>
                            <span><BsSearch/> </span>Buscar
                        </p>
                    </Link>
                    <Link href="#">
                        <p className={styles["vertical-aligment"]}>
                            <span><BsFillBookmarkFill/> </span>Tu Biblioteca
                        </p>
                    </Link>
                    <br />
                    <Link href="#">
                        <p className={styles["vertical-aligment"]}>
                            <span className={styles["create-playlist"]}><GoPlus/></span>Crear
                            playlist
                        </p>
                    </Link>
                    <Link href="#">
                        <p className={styles["vertical-aligment"]}>
                            <span className={styles["your-likes"]}><AiFillHeart/></span>Crear
                            playlist
                        </p>
                    </Link>
                </div>
                <hr />
                <div>
                    <Link href="#">
                        <p>Playlist #1</p>
                    </Link>                    
                    <Link href="#">
                        <p>Playlist #2</p>
                    </Link>
                    <Link href="#">
                        <p>Playlist #3</p>
                    </Link>
                    <Link href="#">
                        <p>Playlist #4</p>
                    </Link>
                </div>
            </nav>
            <div />                            
        </div>
    )
}
