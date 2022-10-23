import styled from "styled-components";

export default function Container({ children }) {
  return (
    <EstiloContainer>
      {children}
    </EstiloContainer>
  )
}

const EstiloContainer = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  padding: 28px 18px 28px 18px;
  box-sizing: border-box;
  background-color: #E5E5E5;

`