import { useContext } from "react";

import styled from "styled-components";
import { UsuarioContext } from '../context/UsuarioProvider';

export default function NavBar(){
  const [usuario, setUsuario] = useContext(UsuarioContext);

  return(
    <EstiloNaveBar>
      <div className="logo">
        <p>TrackIt</p>
      </div>
      <div className="imageuser">
        <img src={usuario?.image} alt="user"></img>
      </div>
    </EstiloNaveBar>
  )
}


const EstiloNaveBar=styled.div`
  
 display: flex;
 background-color: #126BA5;
 align-items: center;
 justify-content:space-between;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
 height: 70px;
 padding: 10px 18px; 
 position: fixed;
 width: 100%;
 top: 0;
 .logo{
    display: flex;
    
    align-items: center;
  }

  p{
    font-family: Playball;
    color: #fff;
    font-size: 38px;
    }

    .imageuser{
      width: 45px;
      height: 45px;
      margin-left: 170px;
      
        img{
          height: 100%;
          border-radius:98px;
        }
    }
`