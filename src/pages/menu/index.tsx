import { useState } from 'react'
import Head from "next/head"
import { Header } from '../../components/Header'
import { canSSRAuth } from "../../utils/canSSRAuth"
import styles from './styles.module.scss'
import { Card } from '../../components/Card'
import { setupAPIClient } from '../../services/api'
import { Value } from 'sass'


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