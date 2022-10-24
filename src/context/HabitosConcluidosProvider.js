import * as React from 'react';

import { createContext, useState, useEffect } from 'react';

export const HabitosContext = createContext([])

export const HabitosProvider = ({ children }) => {
  const [totalHabitos, setTotalHabitos] = useState(0);
  const [totalAtivos, setTotalAtivos] = useState(0);
  const [percentual, setPercentual] = useState(0.0);

  useEffect(() => {
    if(totalHabitos !== 0) {
      const resultado = (totalAtivos / totalHabitos).toFixed(2);
      setPercentual(resultado)
    }
  }, [totalAtivos, totalHabitos])

  return (
    <HabitosContext.Provider value={[setTotalAtivos, totalAtivos, setTotalHabitos, percentual]}>
      {children}
    </HabitosContext.Provider>
  )
}