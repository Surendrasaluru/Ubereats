import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  //slice created
  name: "cart",
  initialState: {
    items: [],
    vegItems: [],
  },
  reducers: {
    //reducer funs object
    addItem: (state, action) => {
      // action dispatchers
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (cartItem) => cartItem?.card?.info?.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state.items));
      // state.items.pop(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    addVegItem: (state, action) => {
      // action dispatchers
      state.vegItems.push(action.payload);
    },
    clearVegCart: (state) => {
      state.vegItems.length = 0;
    },
}}
)

export const { addItem, removeItem, clearCart,addVegItem,clearVegCart } = cartSlice.actions; //actions exported
export default cartSlice.reducer; //reducer exported
