import { configureStore } from "@reduxjs/toolkit";
import BaseUrlReducer from './BaseUrlSlice'
export const store=configureStore({
    reducer:{
       baseUrl:BaseUrlReducer,
    }
})