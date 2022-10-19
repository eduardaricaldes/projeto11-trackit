import styled from "styled-components";
export default function Habitos(){
  return(
    <EstiloContainerHabitos>
      <div className="top">
        <h1>Meus Hábitos</h1>
        <button>+</button>
      </div>
      <div className="aviso">
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </div>
    </EstiloContainerHabitos>
    
  )
}

const EstiloContainerHabitos=styled.div`
padding: 20px 10px;
font-family: 'Lexend Deca', sans-serif;

  .top{
    display: flex;
    flex-direction: row;
    margin-bottom: 28px;


    h1{
      color: #126BA5;
      margin-right: 140px;
      font-size: 22px;

    }

    button{
      width: 40px;
      height: 35px;
      border: none;
      background-color: #52B6FF;
      font-size: 26px ;
      border-radius: 4px;
      text-transform: uppercase;
      color #fff;

    }
  }
  .aviso{
    height: 74px;
    width: 338px;

      p{
        color: #666666;
        font-size: 18px;
      }

  }


  
`