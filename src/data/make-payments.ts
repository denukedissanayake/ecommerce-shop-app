const axios = require('axios')

export const makePayments = async (tokenId : string, amount : number, userAuthToken?:string) => {
    let responce = null
    let error = null
    
    try {
        responce = await axios.post(`${process.env.REACT_APP_BASE_URL}/payments`, {
            tokenId,
            amount : amount * 100
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