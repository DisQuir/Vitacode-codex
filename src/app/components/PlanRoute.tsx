import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../context/AuthContext';
import type { UserPlan } from '../utils/questionnaireData';

interface PlanRouteProps {
  requiredPlan: UserPlan;
}

export function PlanRoute({ requiredPlan }: PlanRouteProps) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-[#02b1cc]" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace state={{ from: location.pathname + location.search }} />;
  }

  if (user.plan !== requiredPlan) {
    if (requiredPlan === 'premium') {
      return <Navigate to={`/premium?from=${encodeURIComponent(location.pathname + location.search)}`} replace />;
    }

    return <Navigate to="/profile/premium" replace />;
  }

  return <Outlet />;
}

export function FreePlanRoute() {
  return <PlanRoute requiredPlan="free" />;
}

export function PremiumPlanRoute() {
  return <PlanRoute requiredPlan="premium" />;
}
