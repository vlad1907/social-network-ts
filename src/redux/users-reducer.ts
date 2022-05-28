export type UsersStateType = {
    users: UserType[]
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type LocationType = {
    city: string
    country: string
}


let initialState: UsersStateType = {
    users: [
        {
            id: 1,
            photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4120d16f-9a21-4972-8d35-a1564b9a9911/220x330',
            followed: true,
            fullName: 'Dmitry',
            status: 'boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4120d16f-9a21-4972-8d35-a1564b9a9911/220x330',
            followed: true,
            fullName: 'Sasha',
            status: 'boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4120d16f-9a21-4972-8d35-a1564b9a9911/220x330',
            followed: false,
            fullName: 'Lena',
            status: 'boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ]
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
                users: {...state.users, ...action.newUser}
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
export const setUsersAC = (users: UsersStateType) => {
    return {type: 'SET-USERS', newUser: users} as const
}