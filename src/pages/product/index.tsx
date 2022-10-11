/* eslint-disable @next/next/no-img-element */
import { useState, ChangeEvent } from 'react'
import Head from "next/head"
import { FiUpload } from 'react-icons/fi'
import { Header } from "../../components/Header"
import { canSSRAuth } from "../../utils/canSSRAuth"
import styles from './styles.module.scss'

export default function Product() {

    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState(null);

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

    return (
        <>
            <Head>
                <title>Novo Produto</title>
            </Head>
            <Header></Header>
            <div>
                <main className={styles.container}>
                    <h1>Novo Produto</h1>

                    <form className={styles.form}>


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


                        <select className={styles.select}>
                            <option>
                                Cupcake
                            </option>
                            <option>
                                Bebida
                            </option>
                            <option>
                                Sobremesa
                            </option>
                        </select>

                        <input className={styles.input}
                            type="text"
                            placeholder="Nome do produto"
                        />

                        <input className={styles.input}
                            type="text"
                            placeholder="Preço do produto"
                        />

                        <textarea className={styles.text_area}
                            placeholder="Descrição do produto">
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
    return {
        props: {}
    }
})