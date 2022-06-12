export type AuthStateType = {
    userId: number
    email: string
    login: string
    isFetching: boolean
}

let initialState: AuthStateType = {
    userId: 0,
    email: "",
    login: "",
    isFetching: false
}

export type AuthReducerActionType = ReturnType<typeof setUserData>

export const authReducer = (state = initialState, action: AuthReducerActionType): AuthStateType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data
            }

        default :
            return state;
    }
}

export const setUserData = (userId, email, login) => {
    return {type: 'SET-USER-DATA', data: {userId, email, login}} as const
}
