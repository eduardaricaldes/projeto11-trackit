import styled from "styled-components";
import { useState, useContext } from 'react';
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';


import DiaCheckbox from "./DiaCheckbox";
import {AutenticacaoContext} from '../context/AutenticacaoProvider';
import { diasCheckbox } from "../constants/dias-checkbox";
import {URL_HABITOS_POST} from "../constants/api-trackit/url-habitos/url-habitos-post";

export default function CardCriarHabitos(
  {
    removerForm,
    adicionarHabito,
    nome,
    setNome,
    listDeDias,
    setListaDeDias,
  }){
  const [inativarCampos, setInativarCampos] = useState(false);
  const [inativarBotao, setInativarBotao] = useState(false);
  const [token, setToken, logado, setLogado] = useContext(AutenticacaoContext);

  function onChangeNome(value) {
    if(value !== "") {
      setNome(value)
    }
  }

  function onCheckDias(event) {
    const checkbox = event.target
    if(checkbox && checkbox.checked) {
      listDeDias.push(parseInt(checkbox.value))
      setListaDeDias(listDeDias)
    }else {
      const index = listDeDias.findIndex(value => {
        return value === checkbox.value;
      });
      listDeDias.splice(index, 1);
      setListaDeDias(listDeDias)
    }
  }

  function inativarForm() {
    setInativarCampos(true);
    setInativarBotao(true);
  }

  function resetarForm() {
    setNome("");
    setListaDeDias([])
    setInativarCampos(false);
    setInativarBotao(false);
  }

  function submit(event) {
    event.preventDefault();
    inativarForm()
    axios.post(URL_HABITOS_POST,
      {
        name: nome,
        days: listDeDias,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).then((response) => {
      resetarForm();
      removerForm();
      const novoHabito = response.data
      adicionarHabito(novoHabito)
    })
    .catch(() => {
      resetarForm()
      alert("nao conseguimos enviar seu habito")
    })
  }

  return(
    <EstiloContainerCardCriarHabitos>
      <form onSubmit={submit}>
        <div className="inputnomehabito">
          <input
            className="nomehabito"
            placeholder="nome do hábito"
            onChange={event =>onChangeNome(event.target.value)}
            disabled={inativarCampos}
            value={nome}
          />
        </div>
        <div className="diasinpult">
          {
            diasCheckbox.map((dia) => {
              return (
                <DiaCheckbox
                  key={dia.id}
                  label={dia.label}
                  value={dia.value}
                  onCheckDias={onCheckDias}
                  disabled={inativarCampos}
                  listDeDias={listDeDias}
                />
              )
            })
          }
        </div>
        <div className="botoes">
          <button className="cancelar"
            disabled={inativarBotao}
            onClick={removerForm}
            type="button"
            >
              Cancelar
          </button>
          <button className="salvar" disabled={inativarBotao}>
            {
              inativarBotao ? (
                <ThreeDots
                  height={35}
                  visible={true}
                  ariaLabel="comment-loading"
                  wrapperClass=""
                  wrapperStyle={{
                    justifyContent: "center"
                  }}
                  color="#fff"
                />
              ): "Salvar"
            }
          </button>
        </div>
      </form>
    </EstiloContainerCardCriarHabitos>
  )
}

const EstiloContainerCardCriarHabitos=styled.div`
border-radius: 5px;
background-color: #fff;
font-family: 'Lexend Deca', sans-serif;
font-size: 19px;
margin-bottom: 10px;
padding: 15px 18px;
  .inputnomehabito{
    margin-bottom: 8px;
    input{
      height: 45px;
      border-radius: 5px;
      border: none;
      border: 1px solid #D5D5D5;
      width: 100%;
      padding: 6px;
      ::placeholder{
        color: #DBDBDB;
        padding: 6px;
      }
    }
  }

  .diasinpult{
    display: flex;
    margin-bottom: 30px;
  }

  .botoes {
    display: flex;
    justify-content: end;
    .cancelar{
      color: #52B6FF;
      border: none;
      background-color: #fff;
      height: 35px;
      width: 84px;
      margin-right: 30px;
    }
    .salvar{
      height: 35px;
      width: 84px;
      background-color: #52B6FF;
      border: none;
      border-radius: 4px;
      color: #ffff;
    }
  }

`