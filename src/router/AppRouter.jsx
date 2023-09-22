import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { STATUS_AUTH, login, logout } from '../store/auth/authSlice';
import { CheckingAuth } from '../ui';
import { FirebaseAuth } from '../firebase/config';

export const AppRouter = () => {

  const {status} = useSelector( state => state.auth )
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if(!user) return dispatch(logout())
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({uid, email, displayName, photoURL}))
    })
  }, [])

  if(status === STATUS_AUTH.CHECKING) {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {
        status === STATUS_AUTH.AUTHENTICATED
        ? <Route path="/*" element={<JournalRoutes />} />
        : <Route path="/auth/*" element={<AuthRoutes />} />
      }
      <Route path="/*" element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
