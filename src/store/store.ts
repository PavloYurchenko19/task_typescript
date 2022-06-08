import {combineReducers, configureStore} from '@reduxjs/toolkit';
import nftsReducer from "./slices/nftsSlice";

const rootReducer = combineReducers({
    nftsReducer

});

export const setupStore = () => configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
