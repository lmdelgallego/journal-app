import { checkingCredentials } from "./authSlice"

export const checkAuth = (email, password) => async (dispatch) => {
  console.log('checkAuth',{email, password});
  dispatch(checkingCredentials())
}

export const startGoogleLogin = () => async (dispatch) => {
  console.log('startGoogleLogin');
  dispatch(checkingCredentials())
};