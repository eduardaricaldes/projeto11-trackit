import styled from "styled-components";
import MainCardHj from "./Main-cards-hj";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from './Container';

export default function Hoje(){
  return(
    <>
      <Navbar/>
      <Container>
        <EstiloContainerHabitos>
          <div className="top">
            <h1>Segunda, 17/05</h1>
            <div className="subtop">
              <p className="porcentagem">67% dos hábitos concluídos</p> 
              <p className="nadaconcluido">Nenhum hábito concluído ainda.</p> 
            </div>
          </div>
        </EstiloContainerHabitos>

        <MainCardsHoje>
          <MainCardHj/>
        </MainCardsHoje>
      </Container>
      <Footer />
    </>
    
  )
}

const EstiloContainerHabitos=styled.div`
line-height: 24px;
font-size:17px;
  .top{
    .subtop{
      .porcentagem{
        color:#8FC549;
      }
      .nadaconcluido{
        color: #BABABA;
      }
    }

    h1{
      color: #126BA5;
      font-size: 22px;
      line-height: 28px;
    }
  }
`

const MainCardsHoje = styled.div`
  margin-top: 28px;
`
