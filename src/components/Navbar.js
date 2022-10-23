import styled from "styled-components";
import teste from "../assets/teste.jpeg";

export default function NavBar(){
  return(
    <EstiloNaveBar>
      <div className="logo">
        <p>TrackIt</p>
      </div>
      <div className="imageuser">
        <img src={teste} alt="user"></img>
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
 padding: 10px 18px; 
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