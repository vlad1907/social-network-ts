import {authAPI, securityAPI} from "../api/api";
import {AppThunk} from './store';

export const SET_USER_DATA = 'auth/SET-USER-DATA';
const GET_CAPTCHA = 'auth/GET-CAPTCHA';

export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
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
    isAuth: false,
    captchaUrl: null
}

export type AuthReducerActionType = ReturnType<typeof setUserDataAC> | ReturnType<typeof getCaptchaUrl>

export const authReducer = (state = initialUsers, action: AuthReducerActionType): AuthDataType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}
        case GET_CAPTCHA:
            return {...state, captchaUrl: action.captcha}
        default :
            return state;
    }
}

export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
} as const);

export const getCaptchaUrl = (captcha: string) => ({type: GET_CAPTCHA, captcha} as const);

export const getAuthData = (): AppThunk => async (dispatch) => {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setUserDataAC(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null, setStatus: (status?: any) => void): AppThunk => async dispatch => {
    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthData())
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptcha());
        }
        setStatus(res.data.messages)
    }
}

export const getCaptcha = (): AppThunk => async dispatch => {
    const res = await securityAPI.getCaptcha();
    const captchaUrl = res.data.url;
    dispatch(getCaptchaUrl(captchaUrl))
}
export const logout = (): AppThunk => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false));
    }
}

