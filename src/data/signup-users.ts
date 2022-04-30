const axios = require('axios')

export const signupUser = async (
    firstname: string,
    lastname: string,
    email: string,
    username: string,
    password: string
) => {
    
    let response = null
    let error = null

    try {
        response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/signup`, {
            firstname,
            lastname,
            email,
            username,
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