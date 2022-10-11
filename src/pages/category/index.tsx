import { useState, FormEvent } from 'react'
import Head from "next/head"
import { toast } from 'react-toastify';
import { setupAPIClient } from '../../services/api'
import { Header } from '../../components/Header'
import { canSSRAuth } from '../../utils/canSSRAuth'
import styles from './styles.module.scss'

export default function Category() {

    const [name, setName] = useState('');

    async function hRegister(event: FormEvent) {
        event.preventDefault();

        if (name === '') {
            toast.warning("Informe o nome da categoria!")
            return;
        }

        const apiClient = setupAPIClient();
        await apiClient.post('/category', {
            name: name
        })

        toast.success(`Categoria: ${name}, cadastrada com sucesso!`);
        setName('');
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
                <h1>Nova Categoria</h1>

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

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})
