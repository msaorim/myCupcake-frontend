import Head from "next/head"
import { Header } from '../../components/Header'
import { canSSRAuth } from "../../utils/canSSRAuth"

export default function Menu() {
    return (
        <>
            <Head>
                <title>Menu myCupcake</title>
            </Head>
            <div>
                <Header></Header>
                <h1>Menu</h1>

            </div>
        </>
    )
}


export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})


// Marcelo Rocha Saorim
// Engenharia de Software
// PIT II
// 2o Semestre 2022
// RGM 22800565