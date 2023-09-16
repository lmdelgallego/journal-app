import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkAuth = (email, password) => async (dispatch) => {
  console.log('checkAuth',{email, password});
  dispatch(checkingCredentials())
}

export const startGoogleLogin = () => async (dispatch) => {
  dispatch(checkingCredentials())
  const result = await singInWithGoogle();
  // console.log(result);
  if( !result.ok ) return dispatch(logout( result.error.message ))
  // delete result.ok;
  dispatch(login(result))
};