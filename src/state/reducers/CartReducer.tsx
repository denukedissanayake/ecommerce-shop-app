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

        case 'INCREACE_PRODUCT_COUNT':
            const updatedItemIndex = state.products.findIndex(product => (
                product._id === action.payload._id
            ))
            const currentItemCount = action.payload.itemCount
            state.products[updatedItemIndex].itemCount = currentItemCount + 1

            return {
                ...state,
                products : [...state.products],
                quantity : state.quantity,
                total : state.total + action.payload.price
            }
        
        case 'DECREACE_PRODUCT_COUNT':
            const decreasedItemIndex = state.products.findIndex(product => (
                product._id === action.payload._id
            ))
            const currentDecreasedItemCount = action.payload.itemCount
            state.products[decreasedItemIndex].itemCount = currentDecreasedItemCount - 1

            return {
                ...state,
                products : [...state.products],
                quantity : state.quantity,
                total : state.total - action.payload.price
            }

        case 'REMOVE_PRODUCT':
            const fiteredProducts = state.products.filter(product => (
                product._id !== action.payload._id
            ))
            return {
                ...state,
                products: [...fiteredProducts],
                quantity: state.quantity - 1,
                total : state.total - action.payload.price * action.payload.itemCount
            }
    }
}