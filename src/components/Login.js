import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

import logo from "../assets/logo.png";
import {URL_LOGIN} from '../constants/api-trackit/url-login';
import {AutenticacaoContext} from '../context/AutenticacaoProvider';
import { UsuarioContext } from './context/UsuarioProvider';


export default function Login (){
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [inativarCampos, setInativarCampos] = useState(false);
  const [inativarBotao, setInativarBotao] = useState(false);
  const [token, setToken] = useContext(AutenticacaoContext);
  const [usuario, setUsuario] = useContext(UsuarioContext);
  const navigate = useNavigate();

  function onChangeEmail(value) {
    if(value !== "") {
      setEmail(value);
    }
  }

  function onChangeSenha(value) {
    if(value !== "") {
      setSenha(value);
    }
  }

  function setarUsuario(usuario) {
    setUsuario({
      id: usuario.id,
      name: usuario.name,
      image: usuario.image,
      email: usuario.email,
    });
    setToken(usuario.token);
  }

  function inativarForm() {
    setInativarCampos(true);
    setInativarBotao(true);
  }

  function resetarForm() {
    setEmail("");
    setSenha("");
    setInativarCampos(false);
    setInativarBotao(false);
  }

  function submit(event) {
    event.preventDefault()
    if(email !== "" && senha !== "") {
      inativarForm();
      axios.post(URL_LOGIN, {
        email: email,
        senha: senha,
      }).then((response) => {
        setarUsuario(response.data);
        navigate("/habitos")
      }).catch(() => {
        alert("Usuario e senha incorretos");
        resetarForm();
        event.target.reset()
      });
    }
  }

  return(
    <EstiloContainerLogin>
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <form onSubmit={submit}>
        <div className="inputs">
          <input
            className="email"
            type="email"
            placeholder="email"
            onChange={event => onChangeEmail(event.target.value)}
            disabled={inativarCampos}
            ></input>
          <input
            className="senha"
            type="password"
            placeholder="senha"
            onChange={event => onChangeSenha(event.target.value)}
            disabled={inativarCampos}
          ></input>
        </div>
        <button className="submit-button" disabled={inativarBotao} type="submit">{
          inativarBotao ? (
            <ThreeDots
              height={12}
              visible={true}
              ariaLabel="comment-loading"
              wrapperClass=""
              wrapperStyle={{
                "justify-content": "center"
              }}
              color="#fff"
            />
          ): "Entrar"
        }</button>
      </form>
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
    .submit-button{
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
    .cadastrar{
      font-size: 12px;
      color:#52B6FF;
      text-align: center;
    }

 `
