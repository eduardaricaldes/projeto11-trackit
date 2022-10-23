import styled from "styled-components";
import lixo from "../assets/lixo.svg";

import DiaCheckbox from "./DiaCheckbox";
import { diasCheckbox } from "../constants/dias-checkbox";

export default function CardCriadoHabitos(){
  return(
  <EstiloContainerCardCriadoHabitos>
      <div className="titulocardcriado">
        <h2 className="titulohabito">Ler 1 Capitulo de livro</h2>
        <img src={lixo} alt="lixo"></img>
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
    