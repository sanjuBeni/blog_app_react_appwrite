import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slice/AuthSlice/authSlice"

export const store = configureStore({
    reducer : {
        auth : authReducer 
    }
})