import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Cadastrar from "./components/Cadastrar";
import Habitos from "./components/Habitos";
import Hoje from "./components/Hoje";
import Historico from "./components/Historico";

const RoutesApp = () => {
  return (
    <Routes>
      <Route element={<Login/>} path="/" exact/>
      <Route element={<Cadastrar/>} path="/cadastro" exact/>
      <Route element={<Habitos/>} path="/habitos" exact/>
      <Route element={<Hoje/>} path="/hoje" exact/>
      <Route element={<Historico/>} path="/historico" exact/>
    </Routes>
  )
}
export default RoutesApp;