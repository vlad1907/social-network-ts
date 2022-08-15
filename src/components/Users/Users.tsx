import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return <span key={index + 1} className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(el => <div key={el.id} className={s.user}>
                    <div className={s.avatar}>
                        <NavLink to={'/profile/' + el.id}><img
                            src={el.photos.small !== null ? el.photos.small : userPhoto}
                            alt={'avatar'}/></NavLink>
                        {el.followed
                            ? <button disabled={props.followingInProgress.some(id => id === el.id)}
                                      onClick={() => {
                                          props.toggleFollowingProgress(true, el.id)
                                          usersAPI.unFollowUsers(el.id).then(data => {
                                              if (data.resultCode === 0) {
                                                  props.unfollow(el.id)
                                              }
                                              props.toggleFollowingProgress(false, el.id)
                                          });
                                      }}>
                                unfollow
                            </button>
                            : <button disabled={props.followingInProgress.some(id => id === el.id)}
                                onClick={() => {
                                    props.toggleFollowingProgress(true, el.id)
                                    usersAPI.followUser(el.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(el.id)
                                        }
                                        props.toggleFollowingProgress(false, el.id)
                                    });

                                }}>
                                follow
                            </button>
                        }
                    </div>
                    <div className={s.userBlock}>
                            <span className={s.nameStatus}>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                            </span>
                        <span className={s.location}>
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                            </span>
                    </div>
                </div>)
            }
        </div>
    );
};
