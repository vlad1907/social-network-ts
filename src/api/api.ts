import axios, {AxiosResponse} from "axios";
import {UsersFollowResponseType, UsersResponseType} from "../redux/users-reducer";
import {AuthResponseType} from "../redux/auth-reducer";
import {ProfileResponseType} from "../redux/profile-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "b6ec5262-3a7f-4613-ab32-e5f165a7a372"
    }
})

export const usersAPI = {

    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then((response: AxiosResponse<UsersResponseType>) => {
            return response.data
        })
    },
    showProfile(userId: number) {
        return instance.get(`profile/` + userId).then((response: AxiosResponse<ProfileResponseType>) => {
            return response.data;
        });
    },
    followUsers(id: number) {
        return instance.post(`follow/${id}`)
            .then((response: AxiosResponse<UsersFollowResponseType>) => {
                return response.data;
            })
    },
    unFollowUsers(id: number) {
        return instance.delete(`follow/${id}`)
            .then((response: AxiosResponse<UsersFollowResponseType>) => {
                return response.data;
            })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then((response: AxiosResponse<AuthResponseType>) => {
            return response.data
        })
    }
}