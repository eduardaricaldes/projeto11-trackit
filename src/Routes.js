import {useContext} from 'react';
import { Route, Routes } from "react-router-dom";

import {AutenticacaoContext} from './context/AutenticacaoProvider';

import Login from "./components/Login";
import Cadastrar from "./components/Cadastrar";
import Habitos from "./components/Habitos";
import Hoje from "./components/Hoje";
import Historico from "./components/Historico";

const RotaPrivada = ({ Componente }) => {
  const [token, setToken, logado] = useContext(AutenticacaoContext)

  return logado ? <Componente /> : <Login />
}

const RoutesApp = () => {
  return (
    <Routes>
      <Route element={<Login/>} path="/" exact/>
      <Route element={<Cadastrar/>} path="/cadastro" exact/>
      <Route element={<RotaPrivada Componente={Habitos}/>} path="/habitos" exact/>
      <Route element={<RotaPrivada Componente={Hoje}/>} path="/hoje" exact/>
      <Route element={<RotaPrivada Componente={Historico}/>} path="/historico" exact/>
    </Routes>
  )
}
export default RoutesApp;