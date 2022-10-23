import styled from "styled-components";

import Login from "./components/Login"
import Cadastrar from "./components/Cadastrar"
import Navbar from "./components/Navbar"
import Habitos from "./components/Habitos"
import Footer from "./components/Footer"
import Container from "./components/Container"
export default function App(){
  return(
    /*<Login></Login>*/
    /*<Cadastrar></Cadastrar>*/
    /*<Habitos></Habitos>*/
    /*<Navbar></Navbar>*/
    /*<Hoje></Hoje>*/
    /*<Footer></Footer>*/
    <EstiloApp>
    
    
      <Navbar></Navbar>
      <Container />
    </EstiloApp>
    
  )
}

const EstiloApp = styled.div`
  background-color: #F2f2f2;
`