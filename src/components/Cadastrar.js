import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

import logo from "../assets/logo.png";
import {URL_SIGN_UP} from '../constants/api-trackit/url-sign-up';


export default function Cadastrar(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [inativarCampos, setInativarCampos] = useState(false);
  const [inativarBotao, setInativarBotao] = useState(false);
  const navigate = useNavigate();

  function onChangeEmail(value) {
    if(value !== "") {
      setEmail(value)
    }
  }

  function onChangeSenha(value) {
    if(value !== "") {
      setSenha(value)
    }
  }

  function onChangeNome(value) {
    if(value !== "") {
      setNome(value)
    }
  }

  function onChangeFoto(value) {
    if(value !== "") {
      setFoto(value)
    }
  }

  function inativarForm() {
    setInativarCampos(true);
    setInativarBotao(true);
  }

  function resetarForm() {
    setEmail("");
    setSenha("");
    setNome("");
    setFoto("");
    setInativarCampos(false);
    setInativarBotao(false);
  }

  function submit(event) {
    event.preventDefault();
    inativarForm()
    axios.post(URL_SIGN_UP, {
        email: email,
        name: nome,
        image: foto,
        password: senha,
    })
    .then((response) => {
      navigate("/")
    })
    .catch(() => {
      resetarForm()
      alert("erro ao enviar os dados")
      event.target.reset()
    })
  }

  return(
    <EstiloContainerCadastrar>
      <div className="logo">
        <img src={logo} alt="logo"></img></div>
        <form onSubmit={submit}>
          <div className="inputs">
            <input
              className="email"
              type="email"
              placeholder="email"
              onChange={event => onChangeEmail(event.target.value)}
              disabled={inativarCampos}
            />
            <input
              className="senha"
              type="password"
              placeholder="senha"
              onChange={event => onChangeSenha(event.target.value)} 
              disabled={inativarCampos} 
            />
            <input
              className="nome"
              type="text"
              placeholder="nome"
              onChange={event => onChangeNome(event.target.value)}
              disabled={inativarCampos}
            />
            <input
              className="foto"
              type="url"
              placeholder="foto"
              onChange={event => onChangeFoto(event.target.value)}
              disabled={inativarCampos}
            />
          </div>
          <button type="submit" disabled={inativarBotao}>
            {
              inativarBotao ? (
              <ThreeDots
                height={12}
                visible={true}
                ariaLabel="comment-loading"
                wrapperClass=""
                wrapperStyle={{
                  justifyContent: "center"
                }}
                color="#fff"
              />
            ): "Cadastrar"
            }
          </button>
        </form>
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
      text-align: center;
      width: 100%;
      height: 45px;
      padding: 11px 20px;
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
