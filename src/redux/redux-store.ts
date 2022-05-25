import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';


/*let reducers = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer
});*/

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer
});

// export type AppStateType = ReturnType<typeof reducers>
export type AppStateType = ReturnType<typeof rootReducer>

// export let store = createStore(reducers);
export let store = createStore(rootReducer);