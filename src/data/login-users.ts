const axios = require('axios')

export const loginUser = async (email: string, password: string) => {
    let response = null
    let error = null

    try {
        response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
            email,
            password,
        }, {
            headers: {
                headers: { 'Content-Type': 'application/json'},
            }
        })
    } catch (e) {
        error = e
    }
    return [response, error]
}