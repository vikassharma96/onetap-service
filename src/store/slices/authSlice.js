import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    loggedIn: false,
  },
  reducers: {
    authenticate: (auth, action) => {
      auth.userId = action.payload;
      auth.loggedIn = true;
    },
  },
});

// actions
export const {authenticate} = authSlice.actions;

// reducer
export default authSlice.reducer;
