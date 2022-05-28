import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'

export const Users = (props: UsersPropsType) => {

    /*  if (props.users.length === 0) {
          props.setUsers([
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
          ])
      }*/

    return <div>
        {
            props.users.map(el => <div key={el.id} className={s.user}>
                <div className={s.avatar}>
                    <img src={el.photoUrl} alt={'avatar'}/>
                    {el.followed
                        ? <button
                            onClick={() => props.unfollow(el.id)}>
                            unfollow
                        </button>
                        : <button
                            onClick={() => props.follow(el.id)}>
                            follow
                        </button>
                    }
                </div>
                <div className={s.userBlock}>
                        <span className={s.nameStatus}>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>
                    <span className={s.location}>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                </div>
            </div>)
        }
    </div>

};
