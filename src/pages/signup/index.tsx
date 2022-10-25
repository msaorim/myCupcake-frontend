import { useState, FormEvent, useContext } from 'react'
import { toast } from 'react-toastify'
import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../../../public/new_logo_medio.svg'
import styles from './styles.module.scss'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import Link from 'next/link'
import { AuthContext } from '../../contexts/AuthContext'

export default function SignUp() {

    const { signUp } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function hSignUp(event: FormEvent) {
        event.preventDefault();

        if (name === "" || email === "" || password === "") {
            toast.warning('Preencher todos os campos!');
            return;
        }

        setLoading(true);

        let data = {
            name,
            email,
            password
        }

        await signUp(data);
        setLoading(false);
    }

    return (
        <>
            <Head>
                <title>myCupcake - Cadastro</title>
            </Head>

            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="logo nyCupcake" />
                <h1 className={styles.titulo}>Cadastro</h1>
                <div className={styles.login}>
                    <form onSubmit={hSignUp}>
                        <Input
                            placeholder='Digite seu Nome'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

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

                        <Button type="submit" loading={loading}>
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