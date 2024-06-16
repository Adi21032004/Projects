import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from '../slice/TodoSlice'

export const Store = configureStore({
    reducer: TodoReducer
})