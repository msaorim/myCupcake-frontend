import { createContext, ReactNode, useState } from 'react'
import { destroyCookie, setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { api } from '../services/apiClient'


//==Contexto=============================================================================
type AuthContextData = {
    user: UserProps,
    isAuthenticated: boolean,
    signIn: (credentials: SignInProps) => Promise<void>,
    signOut: () => void,
    signUp: (credentials: SignInProps) => Promise<void>
}

type UserProps = {
    id: string,
    name: string,
    email: string
}

type SignInProps = {
    email: string,
    password: string
}

export const AuthContext = createContext({} as AuthContextData);

//==Logout===============================================================================
export function signOut() {
    try {
        destroyCookie(undefined, '@myCupcake.token');
        Router.push('/');
    } catch (err) {
        console.log(`Erro: ${err} ao deslogar!`)
    }
}

//==Provider do Contexto=================================================================
type AuthProviderProps = {
    children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;

    //==Login============================================================================
    async function signIn({ email, password }: SignInProps) {
        try {
            const response = await api.post('/login', {
                email,
                password
            })
            //console.log(response.data);
            const { id, name, token } = response.data;
            //setCookie(undefined, "@myCupcake.token", response.data.token);
            setCookie(undefined, "@myCupcake.token", token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            })

            setUser({
                id,
                name,
                email
            })

            // passar o token para próximas requisições
            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            // redirecionar para o menu
            Router.push('/menu')
        } catch (err) {

        }
    }

    //==Cadastro=========================================================================
    type SignUpProps = {
        name: string,
        email: string,
        password: string
    }

    async function signUp({ name, email, password }: SignUpProps) {
        try {
            const response = await api.post('/user', {
                name,
                email,
                password
            });
            alert(`Usuário: ${name}, cadastrado com sucesso.`);
            Router.push('/');
        } catch (err) {
            console.log(`Erro: ${err}], ao cadastrar`);
        }
    }



    //===================================================================================
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

// Marcelo Rocha Saorim
// Engenharia de Software
// PIT II
// 2o Semestre 2022
// RGM 22800565
