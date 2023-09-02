import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      {/* LOGIN & REGISTER */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/* JOURNAL */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  )
}
