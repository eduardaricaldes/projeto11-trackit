import styled from "styled-components";
import { Link } from "react-router-dom";

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
        <Link to="/" className="login">Já tem uma conta? Faça login!</Link>
    </EstiloContainerCadastrar>
    
  )
}

const EstiloContainerCadastrar=styled.div`
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  font-family: 'Lexend Deca', sans-serif;
    .logo{
      display: flex;
      justify-content: center;
      margin-bottom:32px;
      img {
        height: 178.38px;
        width: 190px;
      }
    }
    .inputs{
        display: flex;
        flex-direction: column;
        input{
          font-weight: 400;
          display: block;
          margin-bottom: 5px;
          height: 45px;
          border: 1px solid #D5D5D5;
          border-radius:4px ;
          font-size: 18px;
          padding: 6px;
          color: #666666;
          ::placeholder {
            color: #DBDBDB;
          }
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
    .login{
      font-size: 12px;
      color:#52B6FF;
      text-align: center;
    }

 `
