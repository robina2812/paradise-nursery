import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice.jsx";

const loadState = () => {
  try {
    const raw = localStorage.getItem('paradise_cart');
    return raw ? { cart: { items: JSON.parse(raw) } } : undefined;
  } catch {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  const state = store.getState();
  try {
    localStorage.setItem('paradise_cart', JSON.stringify(state.cart.items));
  } catch {}
});
