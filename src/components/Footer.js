import styled from "styled-components";
import { Link } from 'react-router-dom'
import CircularProgress from "./CircularProgressbar";


export default function Footer(){
  const value = 0.96;
  return(
    <EstiloContainerFooter>
      <div className="footer">
        <Link className="habitos" to="/habitos">Hábitos</Link>
        <EstiloCircularProgressbar>
          <div className="circular-progress">
            <CircularProgress/>
          </div>
        </EstiloCircularProgressbar>
        <Link className="historico" to="/historico">Histórico</Link>
      </div>
    </EstiloContainerFooter>
    
  )
}

const EstiloContainerFooter=styled.div`
  position: fixed;
  bottom: 0;
  font-family: 'Lexend Deca', sans-serif;
  width: 100%;
  background-color: #fff;
  .footer {
    height: 70px;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .habitos,
    .historico {
      color: #52B6FF;
      text-decoration:none;
    }
  }
`

const EstiloCircularProgressbar=styled.div`
  position: relative;
  height: 91px;
    width: 91px;
  .circular-progress {
    position: absolute;
    top: -20px;
  }
`