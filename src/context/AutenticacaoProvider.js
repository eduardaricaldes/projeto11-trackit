import * as React from 'react';
import { useNavigate } from "react-router-dom";

import { createContext, useState, useEffect } from 'react';

export const AutenticacaoContext = createContext([
  {},
  () => {},
])

export const AutenticacaoProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  function armazenarToken(token) {
    setToken(token);
    localStorage.setItem('token', token);
  }

  useEffect(() => {
    if(token === "") {
      const tokenDoLocalStorage = localStorage.getItem("token");
      if(!tokenDoLocalStorage) {
        navigate("/");
      }else {
        setToken(tokenDoLocalStorage)
      }
    }
    
  }, [navigate, token])

  return (
    <AutenticacaoContext.Provider value={[token, armazenarToken]}>
      {children}
    </AutenticacaoContext.Provider>
  )
}