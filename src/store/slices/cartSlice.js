import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (service) => service.id !== action.payload,
      );
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

export const {emptyCart, addItemToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
