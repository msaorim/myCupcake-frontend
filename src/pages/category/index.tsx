import { useState, FormEvent } from 'react'
import Head from "next/head"
import { toast } from 'react-toastify';
import { setupAPIClient } from '../../services/api'
import { Header } from '../../components/Header'
import { canSSRAuth } from '../../utils/canSSRAuth'
import styles from './styles.module.scss'
import { Button } from '../../components/ui/Button';

export default function Category() {

    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    async function hRegister(event: FormEvent) {
        event.preventDefault();

        if (name === '') {
            toast.warning("Informe o nome da categoria!")
            return;
        }

        const apiClient = setupAPIClient();
        setLoading(true);
        await apiClient.post('/category', {
            name: name
        })
        setLoading(false);
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
                    <Button type="submit" loading={loading}>
                        Cadastrar
                    </Button>
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
