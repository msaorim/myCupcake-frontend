/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

import { FiLogOut } from 'react-icons/fi'

import { AuthContext } from '../../contexts/AuthContext'


export function Header() {
    const { signOut, user } = useContext(AuthContext);
    return (
        <>

            <header className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <Link href="/menu">
                        <img src="/logo_menor.svg" alt='logo myCupcakeas' width={150} />
                    </Link>
                    <nav className={styles.menu_nav}>
                        <Link href="/category">
                            <a>nova Categoria</a>
                        </Link>

                        <Link href="/product">
                            <a>novo Produto</a>
                        </Link>

                        <button onClick={signOut}>
                            <FiLogOut color="#FFF" size={20} />
                        </button>
                    </nav>
                </div>
            </header>
        </>
    )
}


// Marcelo Rocha Saorim
// Engenharia de Software
// PIT II
// 2o Semestre 2022
// RGM 22800565