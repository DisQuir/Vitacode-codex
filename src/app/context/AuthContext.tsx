import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  deleteCurrentUser,
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  updateCurrentUserPlan,
  type UserPlan,
  type UserRecord,
} from '../utils/questionnaireData';

interface AuthContextValue {
  user: UserRecord | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<UserRecord>;
  register: (payload: { name: string; email: string; password: string; plan: UserPlan }) => Promise<UserRecord>;
  logout: () => void;
  deleteAccount: () => Promise<void>;
  refreshUser: () => Promise<void>;
  updatePlan: (plan: UserPlan) => Promise<UserRecord>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserRecord | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    setLoading(true);
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      login: async (email, password) => {
        const currentUser = await loginUser(email, password);
        setUser(currentUser);
        return currentUser;
      },
      register: async (payload) => {
        const currentUser = await registerUser(payload);
        setUser(currentUser);
        return currentUser;
      },
      logout: () => {
        logoutUser();
        setUser(null);
      },
      deleteAccount: async () => {
        await deleteCurrentUser();
        setUser(null);
      },
      refreshUser,
      updatePlan: async (plan) => {
        const updatedUser = await updateCurrentUserPlan(plan);
        setUser(updatedUser);
        return updatedUser;
      },
    }),
    [loading, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}
