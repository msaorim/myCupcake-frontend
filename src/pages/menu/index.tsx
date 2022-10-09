import { canSSRAuth } from "../../utils/canSSRAuth"

export default function Menu() {
    return (
        <>
            <h1>Menu</h1>
        </>
    )
}


export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})