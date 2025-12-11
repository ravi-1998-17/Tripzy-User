import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../store/slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import addressReducer from "./slices/addressSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    address: addressReducer,
    auth: authReducer,
  },
});

export default store;
