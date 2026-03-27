import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../context/AuthContext';

export function AnalysisIndex() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to={`/analysis/free${location.search || ''}`} replace />;
  }

  const suffix = `${location.search || ''}`;
  return <Navigate to={`${user.plan === 'premium' ? '/analysis/premium' : '/analysis/free'}${suffix}`} replace />;
}
