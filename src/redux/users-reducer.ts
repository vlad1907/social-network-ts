import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type UserType = {
    id: number
    name: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
    // location: LocationType
}

/*type LocationType = {
    city: string
    country: string
}*/
export type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: null | string
}

export type UsersFollowResponseType = {
    resultCode: number
    messages: string
    data: {}
}

let initialState: UsersStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: UserReducerActionType): UsersStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case  'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(el => el !== action.userId)
            }
        default :
            return state;
    }
}

// ACTION TYPE
export type UserReducerActionType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

// ACTION CREATORS
export const follow = (id: number) => {
    return {type: 'FOLLOW', userId: id} as const
}
export const unfollow = (id: number) => {
    return {type: 'UNFOLLOW', userId: id} as const
}
export const setUsers = (users: UserType[]) => {
    return {type: 'SET-USERS', users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: 'SET-TOTAL-USERS-COUNT', count: totalUsersCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: 'TOGGLE-IS-FETCHING', isFetching} as const
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId} as const
}

// THUNK CREATORS
export const getUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}


export const followUsers = (id: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    const data = await usersAPI.followUsers(id)
    if (data.resultCode === 0) {
        dispatch(follow(id));
    }
    dispatch(toggleFollowingProgress(false, id));
}

export const unFollowUsers = (id: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    const data = await usersAPI.unFollowUsers(id)
    if (data.resultCode === 0) {
        dispatch(unfollow(id));
    }
    dispatch(toggleFollowingProgress(false, id));
}