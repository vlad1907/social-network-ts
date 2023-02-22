import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfilePageTypeActionsTypes, profileReducer} from './profile-reducer';
import {DialogPageActionsTypes, dialogsReducer} from './dialogs-reducer';
import {UserReducerActionType, usersReducer} from './users-reducer';
import {authReducer, AuthReducerActionType} from './auth-reducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import appReducer, {AppReducerActionType} from './app-reducer';


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

export type AppActionsType = AuthReducerActionType
    | DialogPageActionsTypes
    | ProfilePageTypeActionsTypes
    | UserReducerActionType
    | AppReducerActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

export let store = createStore(rootReducer, applyMiddleware(thunk));