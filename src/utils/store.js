import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js";
import cartReducer from '../features/cart/cartSlice.js';

const store = configureStore({
  reducer:{
    user:userReducer,
    cart:cartReducer
  }
});

console.log(store);

export default store;
