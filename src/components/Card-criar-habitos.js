import styled from "styled-components";

export default function CardCriarHabitos(){
  return(
    <EstiloContainerCardCriarHabitos>
      <div className="main">
        <div className="inputnomehabito">
          <input className="nomehabito" placeholder="nome do hábito"></input>
        </div>
        <div className="diasinpult">
          <input className="d" placeholder="D"/>
          <input className="s" placeholder="S"/>
          <input className="t" placeholder="T"/>
          <input className="q" placeholder="Q"/>
          <input className="qui" placeholder="Q"/>
          <input className="sex" placeholder="S"/>
          </div>
          <div className="botoes">
            <div className="cancelar">
              <button className="cancelar">Cancelar</button>
            </div>
            <div className="salvar">
              <button className="salvar">Salvar</button>
            </div>
          </div>
      </div>  
      

    </EstiloContainerCardCriarHabitos>
  )
}

const EstiloContainerCardCriarHabitos=styled.div`
height: 180px;
width: 340px;
border-radius: 5px;
background-color: #fff;
font-family: 'Lexend Deca', sans-serif;
font-size: 19px;
margin-bottom: 10px;
  .main{
    .inputnomehabito{
      input{
        margin-top: 18px;
        margin-left: 18px;
        margin-bottom: 8px;
        height: 45px;
        width: 303px;
        border-radius: 5px;
        border: none;
        border: 1px solid #D5D5D5;
    }
  }

  .diasinpult{
    margin-left: 18px;
      input{
        margin-left: 2px;
        height: 30px;
        width: 30px;
        border-radius: 5px;
        border: none;
        border: 1px solid #D5D5D5;
        text-align: center;
        margin-bottom: 22px;
      }
  }

  .botoes {
    display: flex;
    justify-content:column;
    margin-left: 148px;

    .cancelar{
      button{
        color: #52B6FF;
        border: none;
        background-color: #fff;
        height: 35px;
        width: 84px;
      }
    }
    .salvar{
      button{
        height: 35px;
        width: 84px;
        background-color: #52B6FF;
        border: none;
        border-radius: 4px;
        color: #ffff;
      }
    }
    
  }

  }
  

`