import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // 'checking' | 'authenticated' | 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, {payload}) => {},
    logout: (state, {payload}) => {},
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
    // setAuthStatus: (state, action) => {
    //   state.status = action.payload;
    // },
    // setAuthUser: (state, action) => {
    //   state.uid = action.payload.uid;
    //   state.email = action.payload.email;
    //   state.displayName = action.payload.displayName;
    //   state.photoURL = action.payload.photoURL;
    // },
    // setAuthError: (state, action) => {
    //   state.errorMessage = action.payload;
    // },
  }
});

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;