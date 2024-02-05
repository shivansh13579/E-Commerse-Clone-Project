import { configureStore } from "@reduxjs/toolkit";
import createSlice from "./createSlice";

export const store = configureStore({
    reducer: {
       cart: createSlice
    },
    devTools: true
})