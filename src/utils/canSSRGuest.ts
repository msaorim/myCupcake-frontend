import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { parseCookies } from 'nookies'

// Only Guest Access
export function canSSRGuest<P>(fn: GetServerSideProps<P>) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

        const cookies = parseCookies(ctx);

        // users auth
        if (cookies['@myCupcake.token']) {
            return {
                redirect: {
                    destination: '/menu',
                    permanent: false
                }
            }
        }

        return await fn(ctx);
    }
}

// Marcelo Rocha Saorim
// Engenharia de Software
// PIT II
// 2o Semestre 2022
// RGM 22800565