import styled from "styled-components";
import Routes from "./Routes";
import Cadastrar from "./components/Cadastrar"
import Habitos from "./components/Habitos"
import Footer from "./components/Footer"
import Container from "./components/Container"

export default function App(){
  return(
    <EstiloApp>
      <Routes/>
    </EstiloApp>
  )
}

const EstiloApp = styled.div`

`