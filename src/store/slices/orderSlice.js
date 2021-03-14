import {createSlice} from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    placeOrder: (state, action) => {
      state.list.unshift(action.payload);
    },
  },
});

export const {placeOrder} = orderSlice.actions;

export default orderSlice.reducer;
