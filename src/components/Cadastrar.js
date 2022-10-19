import styled from "styled-components";
import logo from "../assets/logo.png";
export default function Cadastrar(){
  return(
    <EstiloContainerCadastrar>
      <div className="logo">
        <img src={logo} alt="logo"></img></div>
        <div className="inputs">
          <input className="email" type="email" placeholder="email"></input>
          <input className="senha" type="password" placeholder="senha"></input>
          <input className="nome" type="text" placeholder="nome"></input>
          <input className="foto" type="url" placeholder="foto"></input>
        </div>
        <button>Cadastrar</button>
        <p>Já tem uma conta? Faça login!</p>
    </EstiloContainerCadastrar>
    
  )
}

const EstiloContainerCadastrar=styled.div`
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Lexend Deca', sans-serif;
    .logo{
      height: 178.38px;
      width: 190px;
      border-radius: 0px;
      display: flex;
      justify-content:center;
      img {
        width: 100%;
      }
    }
    .inputs{
      display: flex;
      flex-direction: column;
        input{
          margin-bottom: 5px;
          height: 45px;
          width: 268px;
          border: 1px solid #D5D5D5;
          border-radius:4px ;
          font-size: 18px;
          padding: 6px;
          color: #DBDBDB;
        }
    }
    button{
      padding: 11px 98px 11px 98px;
      background-color: #52B6FF;
      border: none;
      border-radius: 4px;
      color: #ffff;
      font-size: 20px;
      margin-bottom: 25px;
    }
    p{
      font-size: 12px;
      color:#52B6FF;
    }

 `
