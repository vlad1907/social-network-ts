export type UsersStateType = {
    users: UserType[]
    /*   pageSize: number
       totalUsersCount: number
       currentPage: number
       isFetching: boolean*/
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


let initialState: UsersStateType = {
    users: [],
    /* pageSize: 10,
     totalUsersCount: 0,
     currentPage: 1,
     isFetching: false*/
}

export type UserReducerActionType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

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
        default :
            return state;
    }
}

export const followAC = (id: number) => {
    return {type: 'FOLLOW', userId: id} as const
}
export const unfollowAC = (id: number) => {
    return {type: 'UNFOLLOW', userId: id} as const
}
export const setUsersAC = (users: UserType[]) => {
    return {type: 'SET-USERS', users} as const
}