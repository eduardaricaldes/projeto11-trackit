import styled from "styled-components";
import lixo from "../assets/lixo.svg";

export default function CardCriadoHabitos(){
  return(
  <EstiloContainerCardCriadoHabitos>
      <div className="titulocardcriado">
          <h2 className="titulohabito">qualquer coisa</h2>
          <img src={lixo} alt="lixo"></img>
      </div>
      <div className="diasinpult">
        <input className="d" placeholder="D"/>
        <input className="s" placeholder="S"/>
        <input className="t" placeholder="T"/>
        <input className="q" placeholder="Q"/>
        <input className="qui" placeholder="Q"/>
        <input className="sex" placeholder="S"/>
      </div>
  </EstiloContainerCardCriadoHabitos>
  )
}

const EstiloContainerCardCriadoHabitos=styled.div`
height: 91px;
width: 340px;
border-radius: 5px;
background-color: #fff;
font-family: 'Lexend Deca', sans-serif;
font-size: 19px;
margin-bottom: 10px;

    .titulocardcriado{
      padding: 13px;
      display: flex;
      justify-content:space-between;

       h2{
        color:#666666;
        }
      img{
        height: 15px;
        width: 13px;
      }
    }
    .diasinpult{
      margin-left: 14px;
      input{
        height: 30px;
        width: 30px;
        border-radius: 5px;
        border: none;
        border: 1px solid #D5D5D5;
        text-align: center;
      }
    }    
`
    