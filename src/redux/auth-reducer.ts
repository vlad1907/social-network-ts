import {authAPI} from "../api/api";
import {AppThunk} from './store';

export const SET_USER_DATA = 'SET-USER-DATA';

export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type AuthResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        id: number
        email: string
        login: string
    }
}

export type LoginResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        userId: number
    }
}

const initialUsers: AuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export type AuthReducerActionType = ReturnType<typeof setUserDataAC>

export const authReducer = (state = initialUsers, action: AuthReducerActionType): AuthDataType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}
        default :
            return state;
    }
}

export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
} as const);

export const getAuthData = (): AppThunk => (dispatch) => {
    authAPI.me().then((res) => {
        if (res.data.resultCode === 0) {
            let {id, login, email} = res.data.data
            dispatch(setUserDataAC(id, email, login, true))
        }
    });
}

export const login = (email: string, password: string, rememberMe: boolean, setStatus: (status?: any) => void): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthData())
            } else {
                setStatus(res.data.messages)
            }
        })
}
export const logout = (): AppThunk => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false));
    }
}

