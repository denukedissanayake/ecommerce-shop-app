type ActionType = { type: 'LOGIN'; payload : string} | { type: 'SIGNUP'; payload : string}

export const AuthReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                isFetching : true,
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isFetching: false,
                currentUser: action.payload
            }
        case 'LOGIN_FALIURE':
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case 'SIGNUP':
            return {
                ...state
            }
    }
}