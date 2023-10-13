import { loginWithEmail, singInWithGoogle, singUpWithEmail, logoutFirebase } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"
import { clearNotesLogout } from "../journal/journalSlice";

export const checkAuth = () => async (dispatch) => {
  dispatch(checkingCredentials())
}

export const startGoogleLogin = () => async (dispatch) => {
  dispatch(checkingCredentials())
  const result = await singInWithGoogle();
  if( !result.ok ) return dispatch(logout( result.error.message ))
  dispatch(login(result))
};

export const startCreateUser = (email, password, displayName) => async (dispatch) => {
  dispatch(checkingCredentials())
  const result = await singUpWithEmail(email, password, displayName);
  const {ok, errorMessage} = result;
  if( !ok ) return dispatch(logout( {errorMessage} ))
  dispatch(login(result))
}

export const startLoginEmailPassword = (email, password) => async (dispatch) => {
  dispatch(checkingCredentials())
  const result = await loginWithEmail({email, password});
  const {ok, errorMessage} = result;
  if( !ok ) return dispatch(logout( {errorMessage} ))
  dispatch(login(result))
}

export const startLogout = () => async (dispatch) => {
  await logoutFirebase()
  dispatch(clearNotesLogout())
  dispatch(logout())
}