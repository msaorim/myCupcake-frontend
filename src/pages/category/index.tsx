import { useState, FormEvent } from 'react'
import Head from "next/head"
import { Header } from '../../components/Header'
import styles from './styles.module.scss'
import { toast } from 'react-toastify';

export default function Category() {

    const [name, setName] = useState('');

    async function hRegister(event: FormEvent) {
        event.preventDefault();
        toast.info(`Categoria: ${name}`)
    }

    return (
        <>
            <Head>
                <title>Nova Categoria</title>
            </Head>
            <div>
                <Header></Header>
            </div>
            <main className={styles.container}>
                <h1>Cadastrar Categoria</h1>

                <form className={styles.form} onSubmit={hRegister}>
                    <input className={styles.input}
                        type="text"
                        placeholder="Digite o nome da categoria"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button className={styles.buttonAdd} type="submit">
                        Cadastrar
                    </button>
                </form>
            </main>
        </>
    )
}