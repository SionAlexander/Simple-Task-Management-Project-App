import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User } from '@/types/user';

type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem('token');
    const u = localStorage.getItem('user');
    if (t && u) {
      setToken(t);
      setUser(JSON.parse(u));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // sementara hardcode
    if (email === 'admin@example.com' && password === 'password') {
      const fake = { id: 1, name: 'Admin', email };
      localStorage.setItem('token', 'fake-jwt');
      localStorage.setItem('user', JSON.stringify(fake));
      setToken('fake-jwt');
      setUser(fake);
      return;
    }
    // nanti ganti ke API:
    // const { access_token, user } = await authApi.login(email, password);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
