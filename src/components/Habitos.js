import styled from "styled-components";
import {useState, useEffect, useContext} from 'react';
import axios from "axios";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from './Container';

import CardCriarHabitos from "./Card-criar-habitos";
import CardCriadoHabitos from "./Card-criado-habitos";
import {URL_HABITOS_GET} from "../constants/api-trackit/url-habitos/url-habitos-get";
import {AutenticacaoContext} from '../context/AutenticacaoProvider';
import {HabitosContext} from '../context/HabitosConcluidosProvider';

export default function Habitos(){
  const [habitos, setHabitos] = useState([]);
  const [mostrarHabitoVazio, setMostrarHabitoVazio] = useState(false);
  const [token] = useContext(AutenticacaoContext);
  const [mostrarCriarHabito, setMostrarHabito] = useState(false);
  const [obteuDaApi, setObteu] = useState(false)
  // form de criacao de habito
  const [nome, setNome] = useState("")
  const [listDeDias, setListaDeDias] = useState([]);
  const [
    setTotalAtivos,
    totalAtivos,
    setTotalHabitos,
    percentual,
    habitosDeHoje,
    setHabitosContext,
    habitosAtivos,
    setAtivos,
    removerHabitoDeHoje,
    adicionarAoHabitosDeHoje,
  ] = useContext(HabitosContext);

  useEffect(() => {
    axios(URL_HABITOS_GET, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((resposta) => {
        if(resposta.data?.length !== 0) {
          setHabitos(resposta.data);
          setObteu(true)
        }else {
          setMostrarHabitoVazio(true);
          setObteu(true)
        }
      }).catch(() => {
        setObteu(true)
        alert("Nao conseguimos baixar seus habitos")
      })
  }, [token])

  useEffect(() => {
    if(habitos.length === 0 && obteuDaApi === true) {
      setMostrarHabitoVazio(true)
    }else {
      setMostrarHabitoVazio(false);
    }
  }, [habitos, obteuDaApi])

  function criarHabitos() {
    setMostrarHabito(true)
    setMostrarHabitoVazio(false);
  }

  function adicionarHabito(habito) {
    setHabitos([...habitos, habito]);
    adicionarAoHabitosDeHoje(habito);
  }

  function removerHabito(habito) {
    const index = habitos.findIndex((item) => {
      return item.id === habito;
    })

    habitos.splice(index, 1);
    setHabitos([...habitos]);
    removerHabitoDeHoje(habito)
  }

  function removerForm() {
    setMostrarHabito(false);
  }

  return(
    <>
      <Navbar/>
      <Container>
        <EstiloContainerHabitos>
          <div className="top">
            <h1>Meus Hábitos</h1>
            <button onClick={criarHabitos}>
              +
            </button>
          </div>
          <div className="maincards">
            {
              mostrarCriarHabito ? (
                <CardCriarHabitos
                  removerForm={removerForm}
                  adicionarHabito={adicionarHabito}
                  nome={nome}
                  setNome={setNome}
                  listDeDias={listDeDias}
                  setListaDeDias={setListaDeDias}
                />
              ): <></>
            }
            {
              habitos.map((habito) => {
                return (
                  <CardCriadoHabitos
                    key={habito.id}
                    id={habito.id}
                    name={habito.name}
                    days={habito.days}
                    removerHabito={removerHabito}
                  />
                )
              })
            }
          </div>
          {
            mostrarHabitoVazio ? (
              <div className="aviso">
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
              </div>
            ): <></>
          }
        </EstiloContainerHabitos>
      </Container>
      <Footer />
    </>
  )
}

const EstiloContainerHabitos=styled.div`
font-family: 'Lexend Deca', sans-serif;
align-items: center;
overflow-y: scroll;
  .top{
    margin-bottom: 28px;
    display: flex;
    justify-content:space-between;
    align-items: center;

    h1{
      color: #126BA5;
      margin-right: 140px;
      font-size: 22px;
    }

    button{
      width: 40px;
      height: 35px;
      border: none;
      background-color: #52B6FF;
      font-size: 26px;
      border-radius: 4px;
      color: #FFFF;
      outline: none;
    }
  }
  .aviso{
    height: 74px;
    width: 338px;

      p{
        color: #666666;
        font-size: 18px;
      }

  }


  
`