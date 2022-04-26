const axios = require('axios')

export const makePayments = async (tokenId : string, amount : number) => {
    let responce = null
    let error = null

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTMyOWEzZTIwNTE3YTE4ZTYzNDBkNiIsInVzZXJuYW1lIjoidXNlcjIiLCJlbWFpbCI6InVzZXIyQGdtYWlsLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTA3NDU5NzgsImV4cCI6MTY1MDgzMjM3OH0.3tRQVpZirB_uRD8Uv_LRGmf6SjkZn7ib9KSZqcSy8r4"
    
    try {
        responce = await axios.post(`${process.env.REACT_APP_BASE_URL}/payments`, {
            tokenId,
            amount : amount * 100
        }, {
            headers: {
                'authorization': `bearer ${token}`
            },
        })
    } catch (e) {
        error = e
    }
    return [responce, error]
}