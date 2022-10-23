import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Cadastrar from "./components/Cadastrar";

const RoutesApp = () => {
  return (
    <Routes>
      <Route element={<Login/>} path="/" exact/>
      <Route element={<Cadastrar/>} path="/cadastro" exact/>
    </Routes>
  )
}
export default RoutesApp;