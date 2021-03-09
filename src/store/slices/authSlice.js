import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
  },
  reducers: {
    authenticate: (auth, action) => {
      auth.userId = action.payload;
    },
  },
});

// actions
export const {authenticate} = authSlice.actions;

// reducer
export default authSlice.reducer;
