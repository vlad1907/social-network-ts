import {AppRootStateType} from './store';
import {createSelector} from 'reselect';
import {UserType} from './users-reducer';

const getUsers = (state: AppRootStateType) => {
    return state.usersPage.users;
}
export const getUsersSelector = createSelector(getUsers, (users: UserType[]) => {
    return users.filter(user => true)
})
export const getPageSize = (state: AppRootStateType) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state: AppRootStateType) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state: AppRootStateType) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state: AppRootStateType) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress;
}