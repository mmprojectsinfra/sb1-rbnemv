import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types/user';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    name: string,
    email: string,
    password: string,
    phone: string
  ) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  userRole: UserRole | null;
  openDashboardModal: () => void; // New method
  closeDashboardModal: () => void; // New method
  isDashboardModalOpen: boolean; // New state
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDashboardModalOpen, setDashboardModalOpen] = useState(false); // New state

  const login = async (email: string, password: string) => {
    // Simulate API call
    const mockUser: User = {
      id: '1',
      name: email.split('@')[0],
      email: email,
      role: email.includes('ceo')
        ? 'ceo'
        : email.includes('manager')
        ? 'manager'
        : email.includes('employee')
        ? 'employee'
        : 'customer',
    };

    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(mockUser));

    // Open the dashboard modal upon login
    setDashboardModalOpen(true);
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
    phone: string
  ) => {
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      role: 'customer', // New users are always customers by default
    };

    setUser(mockUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    // setDashboardModalOpen(false); // Close modal on logout
  };

  const openDashboardModal = () => setDashboardModalOpen(true); // Method to open modal
  const closeDashboardModal = () => setDashboardModalOpen(false); // Method to close modal

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthenticated,
        userRole: user?.role || null,
        openDashboardModal, // Expose open method
        closeDashboardModal, // Expose close method
        isDashboardModalOpen, // Expose modal state
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
