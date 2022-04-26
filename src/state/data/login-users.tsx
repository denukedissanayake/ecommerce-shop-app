import { loginUser } from "../../data/login-users"

export const login = async (username: string, password: string, dispatch: any) => {

    dispatch({
        type: 'LOGIN_START',
    })
    
    try {
        const [userDetails, error] = await loginUser(username, password);
        console.log(userDetails, error);
        if (userDetails.status === 200) {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: userDetails
            })
        } else {
            dispatch({
                type: 'LOGIN_FALIURE',
            })
        }

    } catch (e) {
        dispatch({
            type: 'LOGIN_FALIURE',
        })
    }
}