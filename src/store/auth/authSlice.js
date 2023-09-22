import { createSlice } from '@reduxjs/toolkit';

export const STATUS_AUTH = {
  CHECKING: 'checking',
  AUTHENTICATED: 'authenticated',
  NOT_AUTHENTICATED: 'not-authenticated',
}


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: STATUS_AUTH.CHECKING,
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, {payload}) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },
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