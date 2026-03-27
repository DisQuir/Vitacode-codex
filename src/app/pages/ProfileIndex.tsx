import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

export function ProfileIndex() {
  const { user } = useAuth();
  if (!user) {
    return null;
  }
  return <Navigate to={user.plan === 'premium' ? '/profile/premium' : '/profile/free'} replace />;
}
