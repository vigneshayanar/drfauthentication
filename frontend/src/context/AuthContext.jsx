import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("access") !== null);
  }, []);

  const login = async (email, password, navigate) => {
    const response = await fetch("http://127.0.0.1:8000/app1/token/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data.access);
      localStorage.setItem('access', data.access);  // No need to JSON.stringify for a single value
      setIsAuthenticated(true);
      console.log(localStorage.getItem('access'));
      navigate('/');
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
