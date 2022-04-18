import { cartType } from '../context/CartContext'

type ActionType = { type: 'ADD_PRODUCT'; payload : string} | { type: 'REMOVE_PRODUCT'; payload : string}

export const CartReducer = (state: cartType, action: any) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products : [...state.products , action.payload],
                quantity : state.quantity +  1,
                total : state.total + action.payload.price * action.payload.itemCount
            }
        case 'REMOVE_PRODUCT':
            return {
                ...state
            }
    }
}