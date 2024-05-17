import { createSlice } from "@reduxjs/toolkit";
import Cart from "./Cart";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantiy(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantiy(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantiy,
  decreaseItemQuantiy,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart=(state)=>state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);
