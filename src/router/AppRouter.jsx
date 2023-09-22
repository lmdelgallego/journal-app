import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { useSelector } from 'react-redux';
import { STATUS_AUTH } from '../store/auth/authSlice';
import { CheckingAuth } from '../ui';

export const AppRouter = () => {

  const {status} = useSelector( state => state.auth )

  if(status === STATUS_AUTH.CHECKING) {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {/* LOGIN & REGISTER */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/* JOURNAL */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  )
}
