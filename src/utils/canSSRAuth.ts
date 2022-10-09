import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { AuthTokenError } from '../services/errors/AuthTokenError';

// Only Auth Access
export function canSSRAuth<P>(fn: GetServerSideProps<P>) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);
        const token = cookies['@myCupcake.token']

        if (!token) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false
                }
            }
        }

        try {
            return await fn(ctx);
        } catch (err) {
            console.log(`Erro: ${err}`)
            if (err instanceof AuthTokenError) {
                //destry token
                //destroyCookie(ctx, '@myCupcake.token');
                //redirecionar para login
                console.log(`Erro: ${err}`)
                return {
                    redirect: {
                        destination: '/',
                        permanent: false
                    }
                }
            }
        }
    }
}

// Marcelo Rocha Saorim
// Engenharia de Software
// PIT II
// 2o Semestre 2022
// RGM 22800565
