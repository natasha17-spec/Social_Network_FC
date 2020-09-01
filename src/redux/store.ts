import {combineReducers, Action, createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware,{ThunkAction} from "redux-thunk";
import usersReducer from "./reducers/usersReducer";
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducers = combineReducers({
    getUsersReducers:usersReducer
})
type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
export default store;
// @ts-ignore
window.store = store;
