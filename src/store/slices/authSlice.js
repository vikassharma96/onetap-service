import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    uid: null,
    user: {},
    tryAutoLogin: false,
  },
  reducers: {
    authenticate: (auth, action) => {
      auth.uid = action.payload.uid;
      auth.user = action.payload.user;
      auth.tryAutoLogin = true;
    },
    autoLogin: (auth, action) => {
      auth.tryAutoLogin = true;
    },
    logout: (auth, action) => {
      auth.tryAutoLogin = true;
    },
  },
});

// actions
export const {authenticate, autoLogin, logout} = authSlice.actions;

// reducer
export default authSlice.reducer;
