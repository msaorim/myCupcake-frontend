import { createContext, ReactNode, useState } from 'react'


//==Contexto=============================================================================
type AuthContextData = {
    user: UserProps,
    isAuthenticated: boolean,
    signIn: (credentials: SignInProps) => Promise<void>
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

//==Provider do Contexto=================================================================
type AuthProviderProps = {
    children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignInProps) {
        alert(`Email: ${email} \nSenha: ${password}`);
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}