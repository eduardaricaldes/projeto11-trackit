import styled from "styled-components";
import Routes from "./Routes";

export default function App(){
  return(
    <EstiloApp>
      <Routes/>
    </EstiloApp>
  )
}

const EstiloApp = styled.div`
   -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`