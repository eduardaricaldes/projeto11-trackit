import styled from "styled-components";

import Hoje from "./Hoje"

export default function Container() {
  return (
    <EstiloContainer>
      <Hoje />
    </EstiloContainer>
  )
}

const EstiloContainer = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  padding: 28px 18px 28px 18px;
  box-sizing: border-box;
`