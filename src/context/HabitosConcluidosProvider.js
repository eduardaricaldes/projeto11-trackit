import * as React from 'react';
import axios from "axios";
import * as dayjs from 'dayjs'

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
      })
    }
  }, [token])

  useEffect(() => {
    if(habitosDeHoje.length !== 0 && totalAtivos !== 0) {
      const resultado = (totalAtivos / habitosDeHoje.length).toFixed(2);
      setPercentual(resultado)
    }else{
      setPercentual(0)
    }
  }, [totalAtivos, totalHabitos, habitosDeHoje])

  function removerHabitoDeHoje(id) {
    const index = habitosDeHoje.findIndex((item) => item.id === id)
    if(index !== -1) {
      habitosDeHoje.splice(index, 1);
      setHabitos([...habitosDeHoje]);
      atualizaTotalHabitos()
    }
  }

  function atualizaTotalHabitos() {
    const novoTotal = habitosDeHoje.filter((habito) => habito.done === true).length
    setTotalAtivos(novoTotal);
  }

  function adicionarAoHabitosDeHoje(habito) {
    const diaSemana = dayjs().day()
    if(habito?.days.indexOf(diaSemana) !== -1){
      habito.currentSequence = 0;
      habito.highestSequence = 0;
      habito.done = false;
      setHabitos([...habitosDeHoje, habito]);
    }
    atualizaTotalHabitos();
  }

  return (
    <HabitosContext.Provider value={[
      setTotalAtivos,
      totalAtivos,
      setTotalHabitos,
      percentual,
      habitosDeHoje,
      setHabitos,
      habitosAtivos,
      setAtivos,
      removerHabitoDeHoje,
      adicionarAoHabitosDeHoje
    ]}>
      {children}
    </HabitosContext.Provider>
  )
}