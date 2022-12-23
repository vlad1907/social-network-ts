import React from 'react';
import s from './Users.module.css';
import {UserType} from '../../redux/users-reducer';
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

type UsersPropsType = {
    users: UserType[]
    followUsers: (id: number) => void
    unFollowUsers: (id: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
}

export const Users = (props: UsersPropsType) => {
    const {
        onPageChanged,
        followingInProgress,
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        followUsers,
        unFollowUsers
    } = props

    return (
        <div className={s.tabContainer}>
            <div className={s.usersWrapper}>
                {
                    users.map(el => {
                        return <User
                            key={el.id}
                            user={el}
                            unFollowUsers={unFollowUsers}
                            followingInProgress={followingInProgress}
                            followUsers={followUsers}
                        />
                    })
                }
            </div>
            <div className={s.paginator}>
                <Paginator
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    callbackOnPage={onPageChanged}
                    portionSize={10}
                />
            </div>
        </div>
    );
}

export default Users;
