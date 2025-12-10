import { configureStore } from "@reduxjs/toolkit";
import authRedicer from './slice/authSlice.js';

const store = configureStore({
    reducer:{
        auth: authRedicer
    }
})

export default store;