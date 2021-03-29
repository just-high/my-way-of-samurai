import {combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
})
let store = createStore(reducers);
window.store=store;
window.state = store.getState()
export default store;