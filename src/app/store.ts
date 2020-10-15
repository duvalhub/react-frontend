import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { reducer as categoriesReducer } from 'features/category/CategoryService';


const reducer = combineReducers({
    categories: categoriesReducer
})

const store = configureStore({
    reducer
})

export default store

export type RootState = ReturnType<typeof reducer>

export type AppThunk = ThunkAction<Promise<any>, RootState, null, Action>