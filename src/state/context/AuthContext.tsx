import { createContext, useReducer } from "react";
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

    const [user, dispatch] = useReducer<any>(AuthReducer, authInitialState);

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