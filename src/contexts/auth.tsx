import React, {
  useContext,
  createContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

import { api } from '../services/api';
import { recoverUserInformation, signInRequest } from '../services/auth';

interface User {
  id?: string;
  name: string;
  email: string;
  type: string;
  avatar_url?: string;
  created_at: string;
  updated_at?: string;
  canceled_at?: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  isAuthenticated: boolean;
  signIn(credentials: SignInCredentials): Promise<any>;
}

interface AuthContextProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  const isAuthenticated = !!user;

  useEffect(() => {
    const token = '';

    if (token) {
      recoverUserInformation().then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    const { token, user } = await signInRequest({
      email,
      password,
    });

    console.log({ token, user });

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        loading,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
