import styled from "styled-components";

import check from '../assets/check.svg'

export default function MainCardHj({ id, name, done, currentSequence, highestSequence, marcarHabito }){
  return(
    <MainCards>
      <CardDados>
        <h2 className="titulohabito">{name}</h2>
        <DescricaoHabitos>
          <p className="sequencia">Sequência atual: {currentSequence} dias</p>
          <p className="record">Seu recorde: {highestSequence} dias</p>
        </DescricaoHabitos>
      </CardDados>
      <CardCheckbox>
        <label>
          <input
            type="checkbox"
            value={id}
            name={name}
            defaultChecked={done}
            onChange={event => marcarHabito(event)}
          />
          <div className="check-icon">
            <img src={check} alt="check icon" />
          </div>
        </label>
      </CardCheckbox>
    </MainCards>
  )
}

const MainCards=styled.div`
  height: 94px;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 19px;
  margin-bottom: 10px;
  padding: 13px;
  display: flex;
  justify-content: space-between;
`

const CardDados = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 2;
  h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
  }
`

const DescricaoHabitos = styled.div`
  color: #666666;
  p{
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }
`

const CardCheckbox = styled.div`
  width: 69px;
  height: 69px;
  label {
    display: block;
    position: relative;
    background-color: #eee;
    .check-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 69px;
      height: 69px;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius:5px;
    }
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    
      &:checked ~ .check-icon {
        background-color: #8FC549;
      }
    }
  }
`