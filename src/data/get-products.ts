const axios = require('axios')

export const getProducts = async (category: string | undefined) => {
    let products = []
    let error = null
    
    try {
        products = await axios.get( category ? `${process.env.REACT_APP_BASE_URL}/product?category=${category}` : `${process.env.REACT_APP_BASE_URL}/product`)
    } catch (e) {
        error = e
    }

    return [products.data , error]
}
