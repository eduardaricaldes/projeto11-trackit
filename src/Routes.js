import { Route, Routes } from "react-router-dom";
import Login from "./components/Login"

const RoutesApp = () => {
  return (
    <Routes>
      <Route element={<Login/>} path="/" exact/>
    </Routes>
  )
}
export default RoutesApp;