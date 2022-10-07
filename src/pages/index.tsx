import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../../public/logo_new.svg'
import styles from '../../styles/home.module.scss'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function Home() {
  return (
    <>
      <Head>
        <title>myCupcake - Faça seu login</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="logo nyCupcake" />
        <div>
          <form>
            <Input
              placeholder='Digite seu Email'
              type="text"
            />

            {/* <Input
              placeholder='Digite sua Senha'
              type="password"
            /> */}

            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </form>
          <a className={styles.text}>Não tem conta? - Cadastre-se</a>
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