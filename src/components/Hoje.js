import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import * as dayjs from 'dayjs'

import MainCardHj from "./Main-cards-hj";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from './Container';

import {AutenticacaoContext} from '../context/AutenticacaoProvider';
import {HabitosContext} from '../context/HabitosConcluidosProvider';
import {URL_HABITOS_HJ_GET} from '../constants/api-trackit/url-habitos-hj/url-habitos-hj-get';
import {URL_HABITOS_HJ_POST_CHECK} from '../constants/api-trackit/url-habitos-hj/url-habitos-hj-post-check';
import {URL_HABITOS_HJ_POST_UNCHECK} from '../constants/api-trackit/url-habitos-hj/url-habitos-hj-post-uncheck';

import DiaFormatado from "../funcoes/dia-da-semana";

export default function Hoje(){
  const [token] = useContext(AutenticacaoContext);
  const [diaDeHoje, setDiaDeHoje] = useState("");
  const [setTotalAtivos, totalAtivos, setTotalHabitos, percentual, habitosDeHoje, setHabitos, habitosAtivos, setAtivos] = useContext(HabitosContext)

  useEffect(() => {
    const mes = dayjs().month()
    const diaSemana = dayjs().day()
    const dia = dayjs().date()
    const diaFormatado = DiaFormatado(diaSemana, dia, mes + 1)
    setDiaDeHoje(diaFormatado)
  }, [])

  function buscaHabito(lista, id) {
    return lista.find((item) => item.id === id);
  }

  function buscaHabitoIndex(lista, id) {
    return lista.findIndex((item) => item.id === id);
  }

  function modifyHabitosHoje(habitosDeHojeList, id, done = false) {
    const novoState = habitosDeHojeList.map((habito) => {
      if(habito.id === id) {
        return {...habito, done}
      }
      return habito
    });

    setHabitos(novoState);
  }

  function marcarHabito(event) {
    const checkbox = event.target
    if(checkbox && checkbox.checked){
      const id = checkbox.value;
      axios.post(URL_HABITOS_HJ_POST_CHECK + `${id}/check`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        const habito = buscaHabito(habitosDeHoje, parseInt(id))
        habito.done = true
        const totalAt = totalAtivos + 1 
        setTotalAtivos(totalAt);
        setAtivos([...habitosAtivos, habito])
        modifyHabitosHoje(habitosDeHoje, parseInt(id), true)
        checkbox.checked = true;
      })
      .catch(() => {
        alert("Problema ao concluir habito")
      })
    }else {
      const id = checkbox.value;
      axios.post(URL_HABITOS_HJ_POST_UNCHECK + `/${id}/uncheck`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        const index = buscaHabitoIndex(habitosDeHoje, parseInt(id))
        habitosAtivos.splice(index, 1)
        const totalAt = totalAtivos - 1 
        setTotalAtivos(totalAt);
        setAtivos([...habitosAtivos])
        modifyHabitosHoje(habitosDeHoje, parseInt(id), false)
      })
      .catch(() => {
        alert("Problema ao concluir habito")
      }) 
    }
  }


  return(
    <>
      <Navbar/>
      <Container>
        <EstiloContainerHabitos>
          <div className="top">
            <h1>{diaDeHoje}</h1>
            <div className="subtop">
              
              {
                percentual*100 === 0 ? (
                  <p className="nadaconcluido">
                    Nenhum hábito concluído ainda.
                  </p> 
                ) : (
                  <p className="porcentagem">{percentual*100}% dos hábitos concluídos</p> 
                )
              }
            </div>
          </div>
        </EstiloContainerHabitos>

        <MainCardsHoje>
          {
            habitosDeHoje.map((habito) => {
              return (
                <MainCardHj
                  key={habito.id}
                  id={habito.id}
                  name={habito.name}
                  currentSequence={habito.currentSequence}
                  highestSequence={habito.highestSequence}
                  done={habito.done}
                  marcarHabito={marcarHabito}
                />
              )
            })
          }
        </MainCardsHoje>
      </Container>
      <Footer />
    </>
    
  )
}

const EstiloContainerHabitos=styled.div`
line-height: 24px;
font-size:17px;
  .top{
    .subtop{
      .porcentagem{
        color:#8FC549;
      }
      .nadaconcluido{
        color: #BABABA;
      }
    }

    h1{
      color: #126BA5;
      font-size: 22px;
      line-height: 28px;
    }
  }
`

const MainCardsHoje = styled.div`
  margin-top: 28px;
`
