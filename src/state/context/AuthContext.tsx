import { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";


type AuthContextProviderType = {
    children : React.ReactNode
}

export const AuthContext = createContext<any| null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
    const authInitialState = {
        currentUser: null,
        isFetching: false,
        error: false,
    }

    const [user, dispatch] = useReducer<any, any>(AuthReducer, authInitialState, () => {
        const authUserData = localStorage.getItem('user')
        return authUserData ? JSON.parse(authUserData) : authInitialState
    });

    useEffect(() => {
        localStorage.setItem('user' , JSON.stringify(user))
    }, [user])

    type valueContextType = {
        user: any;
        dispatch : React.DispatchWithoutAction
    }

    const valueContext : valueContextType = {
        user,
        dispatch
    } 

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}