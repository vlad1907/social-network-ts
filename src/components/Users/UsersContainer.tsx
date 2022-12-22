import React from 'react';
import {connect} from 'react-redux';
import {followUsers, getUsers, unFollowUsers, UserType} from '../../redux/users-reducer';
import {AppRootStateType} from '../../redux/store';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/users-selectors";

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

type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: null | string
}

class UsersContainer extends React.Component<UsersPropsType, UsersResponseType> {

    componentDidMount() {
        const {currentPage, pageSize, getUsers} = this.props
        getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, getUsers} = this.props
        getUsers(pageNumber, pageSize)

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

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
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
