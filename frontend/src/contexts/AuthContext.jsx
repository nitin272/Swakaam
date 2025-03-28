import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth token and validate it
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          // In a real app, you would validate the token with your backend
          // For now, we'll just simulate a user
          setUser({
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            role: 'freelancer', // or 'company' or 'admin'
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
          });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      // In a real app, you would make an API call to your backend
      // For now, we'll simulate a successful login
      const mockUser = {
        id: '1',
        name: 'John Doe',
        email: email,
        role: 'freelancer', // or 'company' or 'admin'
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
      };

      localStorage.setItem('authToken', 'mock-token');
      setUser(mockUser);
      return mockUser;
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const register = async (userData) => {
    try {
      // In a real app, you would make an API call to your backend
      // For now, we'll simulate a successful registration
      const mockUser = {
        id: '1',
        ...userData,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.name}`
      };

      localStorage.setItem('authToken', 'mock-token');
      setUser(mockUser);
      return mockUser;
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  const updateUser = (userData) => {
    setUser(prev => ({ ...prev, ...userData }));
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 