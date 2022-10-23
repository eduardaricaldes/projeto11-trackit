import * as React from 'react';

import { createContext, useState } from 'react';

export const AutenticacaoContext = createContext([
  {},
  () => {},
])

export const AutenticacaoProvider = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <AutenticacaoContext.Provider value={[token, setToken]}>
      {children}
    </AutenticacaoContext.Provider>
  )
}