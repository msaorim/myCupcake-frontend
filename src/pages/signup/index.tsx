import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../../../public/new_logo_medio.svg'
import styles from '../../../styles/home.module.scss'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import Link from 'next/link'

export default function SignUp() {
    return (
        <>
            <Head>
                <title>myCupcake - Cadastro</title>
            </Head>

            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="logo nyCupcake" />
                <h1>Cadastro</h1>
                <div className={styles.login}>
                    <form>
                        <Input
                            placeholder='Digite seu Nome'
                            type="text"
                        />

                        <Input
                            placeholder='Digite seu Email'
                            type="text"
                        />

                        <Input
                            placeholder='Digite sua Senha'
                            type="password"
                        />

                        <Button type="submit" loading={false}>
                            Cadastrar
                        </Button>
                    </form>
                    <Link href='/'>
                        <a className={styles.text}>Já é Cadastrado? - <span className={styles.cadastrologin}>Faça o Login</span></a>
                    </Link>
                </div>
            </div>
        </>
    )
}


// Marcelo Rocha Saorim
// Engenharia de Software
// PIT II
// 2o Semestre 2022
// RGM 22800565