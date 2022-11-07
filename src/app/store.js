import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import userReducer from "../features/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        cart: cartSlice,
    }
})