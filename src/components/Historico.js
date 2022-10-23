import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from './Container';

export default function Historico() {
  return (
    <>
      <Navbar/>
      <Container>
        <EstiloHistorico>
          <h2>Histórico</h2>
          <div className="conteudo">
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
          </div>
        </EstiloHistorico>
      </Container>
      <Footer />
    </>
  )
}
const EstiloHistorico = styled.div`
  h2 {
    color: #126BA5;
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 20px;
  }
  .conteudo {
    color: #666666;
  }
`