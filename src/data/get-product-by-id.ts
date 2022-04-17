const axios = require('axios')

export const getProductById = async (id: string | undefined) => {
    let product = []
    let error = null
    
    try {
        product = await axios.get(`${process.env.REACT_APP_BASE_URL}/product/${id}`)
    } catch (e) {
        error = e
    }

    return [product.data , error]
}