import { createContext, useEffect, useReducer } from "react";
import { CartReducer } from "../reducers/CartReducer";
import {productType} from "../../utils/Types"

export type cartType = {
    products: productType[] | any[],
    quantity: number,
    total : number
}

type CartContextProviderType = {
    children : React.ReactNode
}

export const CartContext = createContext<cartType | any>(null);

export const CartContextProvider = ({ children }: CartContextProviderType) => {
    const cartInitialState = {
        products: [],
        quantity: 0,
        total: 0
    }

    const [cart, dispatch] = useReducer<any, any>(CartReducer, cartInitialState, () => {
        const cartrData = localStorage.getItem('cart')
        return cartrData ? JSON.parse(cartrData) : cartInitialState
    });

    useEffect(() => {
        localStorage.setItem('cart' , JSON.stringify(cart))
    }, [cart])

    type valueContextType = {
        cart: cartType | any;
        dispatch : React.DispatchWithoutAction
    }

    const valueContext : valueContextType = {
        cart,
        dispatch
    } 

    return (
        <CartContext.Provider value={valueContext}>
            {children}
        </CartContext.Provider>
    )
}