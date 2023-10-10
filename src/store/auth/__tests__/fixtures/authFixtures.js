import { STATUS_AUTH } from "../../authSlice";

export const initialState = {
  status: STATUS_AUTH.CHECKING,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
}

export const authenticatedState = {
  status: STATUS_AUTH.AUTHENTICATED,
  uid: '123ABD',
  email: 'demo@google.com',
  displayName: 'Demo User',
  photoURL: 'https://demo.png',
  errorMessage: null,
}
export const notAuthenticatedState = {
  ...initialState,
  status: STATUS_AUTH.NOT_AUTHENTICATED
}

export const demoUser = {
  uid: '123ABD',
  email: 'demo@google.com',
  displayName: 'Demo User',
  photoURL: 'https://demo.png',
}