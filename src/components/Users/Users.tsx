import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component<any, any> {

    constructor(props:any) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>
            {
                this.props.users.map(el => <div key={el.id} className={s.user}>
                    <div className={s.avatar}>
                        <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt={'avatar'}/>
                        {el.followed
                            ? <button
                                onClick={() => this.props.unfollow(el.id)}>
                                unfollow
                            </button>
                            : <button
                                onClick={() => this.props.follow(el.id)}>
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
    }
}

export default Users;
