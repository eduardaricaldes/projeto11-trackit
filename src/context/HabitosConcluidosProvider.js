import * as React from 'react';
import axios from "axios";

import { createContext, useState, useEffect, useContext } from 'react';
import {URL_HABITOS_HJ_GET} from '../constants/api-trackit/url-habitos-hj/url-habitos-hj-get';
import {AutenticacaoContext} from '../context/AutenticacaoProvider';

export const HabitosContext = createContext([])

export const HabitosProvider = ({ children }) => {
  const [token] = useContext(AutenticacaoContext);
  const [habitosDeHoje, setHabitos] = useState([]);
  const [habitosAtivos, setAtivos] = useState([])
  const [totalHabitos, setTotalHabitos] = useState(0);
  const [totalAtivos, setTotalAtivos] = useState(0);
  const [percentual, setPercentual] = useState(0.0);

  useEffect(() => {
    if(token){
      axios(URL_HABITOS_HJ_GET, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      const habitos = response.data
      setHabitos(habitos);
      setTotalHabitos(habitos.length)
      const ativos = [];
      habitos.map((habito) => {
        if(habito.done) {
          ativos.push(habito)
        }
      });
      setTotalAtivos(ativos.length);
      setAtivos(ativos);
    })
    .catch(() => {
      alert("Nao conseguimos achar seus habitos de hoje")
    })}
  }, [token])

  useEffect(() => {
    if(totalHabitos !== 0) {
      const resultado = (totalAtivos / totalHabitos).toFixed(2);
      setPercentual(resultado)
    }
  }, [totalAtivos, totalHabitos])

  return (
    <HabitosContext.Provider value={[setTotalAtivos, totalAtivos, setTotalHabitos, percentual, habitosDeHoje, setHabitos, habitosAtivos, setAtivos]}>
      {children}
    </HabitosContext.Provider>
  )
}