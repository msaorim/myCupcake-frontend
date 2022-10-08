import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'
import { signOut } from '../contexts/AuthContext';

import { AuthTokenError } from './errors/AuthTokenError'

export function setupAPIClient(ctx = undefined) {
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:3300',
        //baseURL: 'http://192.168.0.164:3300',
        //baseURL: 'https://my-cupcake.herokuapp.com',
        headers: {
            Authorization: `Bearer ${cookies['@myCupcake.token']}`
        }
    })
    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if (error.response.status === 401) {
            // deslogar usuário
            signOut();
        } else {
            return Promise.reject(new AuthTokenError());
        }

        return Promise.reject(error);
    })

    return api;
}   