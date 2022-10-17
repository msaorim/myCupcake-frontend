/* eslint-disable @next/next/no-img-element */
import { useState, ChangeEvent, FormEvent } from 'react'
import Head from "next/head"
import styles from './styles.module.scss'
import { Header } from "../../components/Header"
import { canSSRAuth } from "../../utils/canSSRAuth"
import { FiUpload } from 'react-icons/fi'
import { setupAPIClient } from '../../services/api'
import { toast } from 'react-toastify'
import Router from 'next/router'

type CategoryItemsProps = {
    id: string,
    name: string
}

interface CategoryProps {
    categoryList: CategoryItemsProps[]
}

export default function Product({ categoryList }: CategoryProps) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState(null);

    const [categories, setCategories] = useState(categoryList || []);
    const [categorySelected, setCategorySelected] = useState(0);


    //console.log(categoryList);

    function hFile(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            return;
        }
        const image = e.target.files[0];
        if (!image) {
            return;
        }
        if (image.type === 'image/jpeg' || image.type === 'image/png') {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]));
        }
    }

    async function hChangeCategory(e) {
        //toast.info(`Indice da Categoria selecionada: ${e.target.value}`);
        //console.log(categories[e.target.value].name);
        setCategorySelected(e.target.value);
    }

    async function hRegister(event: FormEvent) {
        event.preventDefault();

        try {
            const data = new FormData();
            if (name === '' || price === '' || description === '' || imageAvatar === null) {
                toast.warning("Preencher todos os campos")
                return;
            }
            data.append('name', name);
            data.append('price', price);
            data.append('description', description);
            data.append('category_id', categories[categorySelected].id);
            data.append('file', imageAvatar);

            const apiClient = setupAPIClient();
            await apiClient.post('/product', data);
            toast.success("Produto cadastrado com sucesso.");
            Router.push('/menu');
        } catch (err) {
            toast.error("Erro ao cadastrar o produto!");
        }
        setName('');
        setPrice('');
        setDescription('');
        setImageAvatar(null);
        setAvatarUrl('');
    }

    return (
        <>
            <Head>
                <title>Novo Produto</title>
            </Head>
            <Header></Header>
            <div>
                <main className={styles.container}>
                    <h1>Novo Produto</h1>

                    <form
                        className={styles.form}
                        onSubmit={hRegister}
                    >


                        <label className={styles.label_avatar}>
                            <span>
                                <FiUpload size={30} color="#FFF" />
                            </span>
                            <input
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={hFile}
                            />

                            {avatarUrl && (
                                <img
                                    className={styles.preview}
                                    src={avatarUrl}
                                    alt="foto do produto"
                                    width={250}
                                    height={250}
                                />
                            )}
                        </label>


                        <select
                            className={styles.select}
                            value={categorySelected}
                            onChange={hChangeCategory}
                        >
                            {categories.map((item, index) => {
                                return (
                                    <option key={item.id} value={index}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </select>

                        <input className={styles.input}
                            type="text"
                            placeholder="Nome do produto"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input className={styles.input}
                            type="text"
                            placeholder="Preço do produto"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <textarea className={styles.text_area}
                            placeholder="Descrição do produto"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </textarea>

                        <button className={styles.button_add} type="submit">
                            Cadastrar
                        </button>
                    </form>


                </main>
            </div>
        </>
    )
}


export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/categories')

    return {
        props: {
            categoryList: response.data
        }
    }
})