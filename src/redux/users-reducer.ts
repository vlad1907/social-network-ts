export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export type UserReducerActionType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

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
        default :
            return state;
    }
}

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