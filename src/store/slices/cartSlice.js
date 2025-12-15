import { createSlice } from "@reduxjs/toolkit";

const storedCart = localStorage.getItem("cart");

const initialState = {
  items: storedCart ? JSON.parse(storedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const exist = state.items.find((item) => item.id === product.id);

      if (exist) {
        exist.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    updateQty(state, action) {
      const { id, qty } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.qty = qty;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearCart(state) {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
