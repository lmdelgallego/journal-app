import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { STATUS_AUTH } from '../store/auth/authSlice';
import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {

  const {status} = useCheckAuth();

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
