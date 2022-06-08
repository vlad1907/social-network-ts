import {combineReducers, createStore} from 'redux';
import {ProfilePageType, profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer, SidebarType} from './sidebar-reducer';
import {usersReducer} from './users-reducer';
import {DialogPageType} from '../components/Dialogs/Dialogs';

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
    // usersPage:UsersStateType
}

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);