import { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";


type AuthContextProviderType = {
    children : React.ReactNode
}

type UserType = {
    currentUser: {
        accesToken: string,
        message: string,
        success: string
    },
    isFetching: boolean,
    error: boolean
}

export const AuthContext = createContext<UserType| any>(null);

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
        user && localStorage.setItem('user' , JSON.stringify(user))
    }, [user])

    type valueContextType = {
        user: UserType | any;
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