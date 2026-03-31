import { Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

export function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f7f8] px-4">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-[#02b1cc]" />
      </div>
    );
  }

  return <Navigate replace to={user ? '/profile' : '/questionnaire/step1'} />;
}
