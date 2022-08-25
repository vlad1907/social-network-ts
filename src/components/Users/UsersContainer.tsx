import React from 'react';
import {connect} from 'react-redux';
import {followUsers, getUsers, unFollowUsers, UserType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type MapDispatchToPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    followUsers: (id: number) => void
    unFollowUsers: (id: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

/*type UsersCType = {
    users: UserType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean

}*/
type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: null | string
}

class UsersContainer extends React.Component<UsersPropsType, UsersResponseType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        /* this.props.toggleIsFetching(true)
         usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
             this.props.toggleIsFetching(false);
             this.props.setUsers(data.items);
             this.props.setTotalUsersCount(data.totalCount);
         });*/
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        /* this.props.setCurrentPage(pageNumber)
         this.props.toggleIsFetching(true)
         usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
             this.props.toggleIsFetching(false);
             this.props.setUsers(data.items);
         });*/
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   followUsers={this.props.followUsers}
                   unFollowUsers={this.props.unFollowUsers}
            />
        </>

    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


// export const UsersContainer = withAuthRedirect(connect(mapStateToProps, {
//     getUsers, followUsers, unFollowUsers
// })
// (UsersContainer))

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
            getUsers, followUsers, unFollowUsers
        }
    ), withAuthRedirect
)(UsersContainer)
