import { useState } from 'react'
import Head from "next/head"
import Image from 'next/image'
import Img01 from '../../public/brigadeiro.jpg'
import { Header } from '../../components/Header'
import { canSSRAuth } from "../../utils/canSSRAuth"
import styles from './styles.module.scss'
import { Card } from '../../components/Card'
import { setupAPIClient } from '../../services/api'


type ProductItemsProps = {
    id: string,
    name: string,
    banner: string,
    description: string,
    price: string
}

interface ProductsProps {
    productList: ProductItemsProps[]
}

export default function Menu({ productList }: ProductsProps) {

    const [products, setProducts] = useState(productList || []);
    console.log({ products });


    return (
        <>
            <Head>
                <title>Menu myCupcake</title>
            </Head>

            <Header />

            <div className={styles.titulo}>
                <h1>Menu</h1>

            </div>
            <div className={styles.card}>
                <Card image={'brigadeiro.jpg'}
                    name={"Brigadeiro"}
                    description={"Cupcake de Brigadeiro com chocolate belga"}
                    price={'12.00'}
                ></Card>
                <Card image={'doce_de_leite.jpg'}
                    name={"Doce de Leite"}
                    description={"Cupcake de Doce de Leite"}
                    price={'11.50'}
                ></Card>
                <Card image={'leite_ninho.jpg'}
                    name={"Leite Ninho"}
                    description={"Cupcake de Leite Ninho"}
                    price={'11.00'}
                ></Card>
                <Card image={'limão.jpg'}
                    name={"Limão"}
                    description={"Cupcake de Creme de Limão"}
                    price={'10.00'}
                ></Card>
                <Card image={'suco_uva_lata.jpg'}
                    name={"Suco de Uva"}
                    description={"Suco de Uva lata"}
                    price={'12.00'}
                ></Card>

                {products.map((item) => (

                    <Card key={item.id}
                        image={item.banner}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    ></Card>

                    // <li key={item.id}>{item.name}</li>
                ))}

            </div>
            <footer className={styles.rodape}>
                <h3>Atenção! Versão de Estudo!!!</h3>
                <h3>Imagens novas serão gravadas no Heroku.</h3>
                <h3>E após 30 minutos de inatividade, serão removidas</h3>
                <h3>do Heroku, devido ao plano gratuíto. Obrigado.</h3>
            </footer>
        </>
    )
}


export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/products')
    return (
        {
            props: {
                productList: response.data
            }
        })
})


// Marcelo Rocha Saorim
// Engenharia de Software
// PIT II
// 2o Semestre 2022
// RGM 22800565