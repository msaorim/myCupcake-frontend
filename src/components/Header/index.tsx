import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiLogOut } from 'react-icons/fi'
import styles from './styles.module.scss'
import ImgLogo from '../../../public/logo_menor.svg'
import { AuthContext } from '../../contexts/AuthContext'
export function Header() {
    const { signOut, user } = useContext(AuthContext);
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/menu">
                    <Image src={ImgLogo} alt='logo myCupcakeas' width={150}></Image>
                </Link>
                <h3>{user?.name}</h3>
                <nav className={styles.menu_nav}>
                    <Link href={"/menu"}>
                        <a>Categoria</a>
                    </Link>

                    <Link href={"/menu"}>
                        <a>Cardápio</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color="#FFF" size={20} />
                    </button>
                </nav>
            </div>
        </header>
    )
}

// no console do browser mostra um erro
// é destes componentes Link


// Marcelo Rocha Saorim
// Engenharia de Software
// PIT II
// 2o Semestre 2022
// RGM 22800565