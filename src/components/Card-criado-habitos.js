import styled from "styled-components";
import {useState, useEffect, useContext} from 'react';
import axios from "axios";

import lixo from "../assets/lixo.svg";
import {URL_HABITOS_DELET} from "../constants/api-trackit/url-habitos/url-habitos-delet";
import {AutenticacaoContext} from '../context/AutenticacaoProvider';

import DiaCheckbox from "./DiaCheckbox";
import { diasCheckbox } from "../constants/dias-checkbox";

export default function CardCriadoHabitos({ id, name, days = [], removerHabito}){
  const [token, setToken] = useContext(AutenticacaoContext);
  
  function deletar(idClicado) {
    if(window.confirm("Deseja remover esse hábito?")){
      axios.delete(`${URL_HABITOS_DELET}${idClicado}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        removerHabito(id)
      }).catch(() => {
        alert("Nao conseguimos deletar seu habito")
      })
    }
  }

  return(
  <EstiloContainerCardCriadoHabitos>
      <div className="titulocardcriado">
        <h2 className="titulohabito">{name}</h2>
        <img src={lixo} alt="lixo" onClick={() => deletar(id)}></img>
      </div>
      <div className="diasinpult">
        {
          diasCheckbox.map((dia) => {
            return (
              <DiaCheckbox
                key={dia.id}
                label={dia.label}
                value={dia.value}
              />
            )
          })
        }
      </div>
  </EstiloContainerCardCriadoHabitos>
  )
}

const EstiloContainerCardCriadoHabitos=styled.div`
height: 91px;
border-radius: 5px;
background-color: #fff;
font-size: 19px;
margin-bottom: 10px;
padding: 15px 18px;
box-sizing: border-box;
  .titulocardcriado{
    display: flex;
    justify-content:space-between;
    margin-bottom: 10px;
    h2{
      color:#666666;
    }
    img{
      height: 15px;
      width: 13px;
    }
  }
  .diasinpult{
    display: flex;
    margin-bottom: 30px;
  }    
`
    