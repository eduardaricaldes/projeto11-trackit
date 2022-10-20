import styled from "styled-components";
import CircularProgress from "./CircularProgressbar";


export default function Footer(){
  const value = 0.96;
  return(
    <EstiloContainerFooter>
      <div className="footer">
        <p className="habitos">Hábitos</p>
        <EstiloCircularProgressbar>
          <CircularProgress/>
        </EstiloCircularProgressbar>
        <p className="historico">Histórico</p>
      </div>
    </EstiloContainerFooter>
    
  )
}

const EstiloContainerFooter=styled.div`
  height: 70px;
  position: fixed;
  bottom: 0;
  padding: 10px 10px;
  font-family: 'Lexend Deca', sans-serif;
    .footer{
      display: flex;
      height: 100%;
      flex-direction:row;
      justify-content: space-between;
      margin-left: 80px;
      align-items: center;
      
        p{
          color:#52B6FF;
          font-size:18px;
        }
    }
`

const EstiloCircularProgressbar=styled.div`
height: 91px;
width: 91px;
margin-left: 28px;
margin-right: 28px;
margin-bottom: 10px;
`