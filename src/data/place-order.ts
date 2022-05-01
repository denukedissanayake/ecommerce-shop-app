const axios = require('axios')

export const placeOrder = async (userID : string, srripeOrderID: string, products: any, amount : number, address: string, userAuthToken?:string) => {
    let responce = null
    let error = null
    
    try {
        responce = await axios.post(`${process.env.REACT_APP_BASE_URL}/order`, {
            userID,
            srripeOrderID,
            products,
            amount,
            address
        }, {
            headers: {
                'authorization': `bearer ${userAuthToken}`
            },
        })
    } catch (e) {
        error = e
    }
    return [responce, error]
}