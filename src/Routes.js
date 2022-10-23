import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Cadastrar from "./components/Cadastrar";
import Habitos from "./components/Habitos";

const RoutesApp = () => {
  return (
    <Routes>
      <Route element={<Login/>} path="/" exact/>
      <Route element={<Cadastrar/>} path="/cadastro" exact/>
      <Route element={<Habitos/>} path="/habitos" exact/>
    </Routes>
  )
}
export default RoutesApp;