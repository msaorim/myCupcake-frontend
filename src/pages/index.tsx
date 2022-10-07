import { useContext, FormEvent, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../../public/logo_new.svg'
import styles from '../../styles/home.module.scss'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import Link from 'next/link'
import { AuthContext } from '../contexts/AuthContext'

export default function Home() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function hlogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email,
      password
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder='Digite sua Senha'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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