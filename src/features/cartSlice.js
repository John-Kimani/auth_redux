import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: [],

    reducers: {
        addItem: (state, action) => {
            return [...state, action.payload];
        },
        clearItem: (state) => {
            state.cart = [];
        },
    },
});

export const { addItem, clearItem } = cartSlice.actions;

export const addToCart = (state) => state.cart;

export default cartSlice.reducer;