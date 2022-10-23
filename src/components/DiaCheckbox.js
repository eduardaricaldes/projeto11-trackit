import styled from "styled-components";

export default function DiasCheckbox({ label, value }){
  return(
    <>
      <EstiloCheckbox>
        <input type="checkbox" value={value}/>
        <span className="checkbox-label">{label}</span>
      </EstiloCheckbox>
    </>
  )
}

const EstiloCheckbox = styled.label`
  width: 30px;
  height: 30px;
  position: relative;
  margin-right: 5px;
  .checkbox-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:5px;
    border: 1px solid #D5D5D5;
    color: #D5D5D5;
  }
  input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      &:checked ~ .checkbox-label {
        background-color: #CFCFCF;
        color: #ffffff;
      }
    }

`