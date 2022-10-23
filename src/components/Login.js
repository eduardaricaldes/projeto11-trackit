import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

export default function Login (){
  return(
    <EstiloContainerLogin>
      <div className="logo">
        <img src={logo} alt="logo"></img></div>
        <div className="inputs">
          <input className="email" type="email" placeholder="email"></input>
          <input className="senha" type="password" placeholder="senha"></input>
        </div>
        <button>Entrar</button>
        <Link className="cadastrar" to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </EstiloContainerLogin>
  )
}

 const EstiloContainerLogin=styled.div`
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
      padding: 11px 112px 11px 112px;
      background-color: #52B6FF;
      border: none;
      border-radius: 4px;
      color: #ffff;
      font-size: 20px;
      margin-bottom: 25px;
    }
    .cadastrar{
      font-size: 12px;
      color:#52B6FF;
      text-align: center;
    }

 `
