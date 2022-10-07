import { useContext, FormEvent } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../../public/logo_new.svg'
import styles from '../../styles/home.module.scss'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import Link from 'next/link'
import { AuthContext } from '../contexts/AuthContext'

export default function Home() {
  const { signIn } = useContext(AuthContext)

  async function hlogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email: "meuemail@teste",
      password: "123"
    }

    await signIn(data);
  }

  return (
    <>
      <Head>
        <title>myCupcake - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="logo nyCupcake" />
        <div className={styles.login}>
          <form onSubmit={hlogin}>
            <Input
              placeholder='Digite seu Email'
              type="text"
            />

            <Input
              placeholder='Digite sua Senha'
              type="password"
            />

            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <Link href='/signup'>
            <a className={styles.text}>Não tem conta? - <span className={styles.cadastrologin}>Cadastre-se</span></a>
          </Link>
        </div>
      </div>
      <footer className={styles.assinatura}>
        Desenvolvido por Marcelo Saorim
      </footer>
    </>
  )
}


// Marcelo Rocha Saorim
// Engenharia de Software
// PIT II
// 2o Semestre 2022
// RGM 22800565