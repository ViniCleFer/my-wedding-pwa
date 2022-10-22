import { ReactNode } from 'react';

import { AuthProvider } from '../contexts/auth';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

