import styled from "styled-components";
import DiaCheckbox from "./DiaCheckbox";

import { diasCheckbox } from "../constants/dias-checkbox";

export default function CardCriarHabitos(){

  return(
    <EstiloContainerCardCriarHabitos>
      <div className="inputnomehabito">
        <input className="nomehabito" placeholder="nome do hábito"></input>
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
      <div className="botoes">
        <button className="cancelar">Cancelar</button>
        <button className="salvar">Salvar</button>
      </div>
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