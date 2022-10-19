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
 height: 70px;
 width: 375px;

  .logo{
    display: flex;
    padding: 10px 10px 10px 10px;
    align-items: center;

  }

  p{
    font-family: Playball;
    color: #fff;
    font-size: 38px;
    }

    .imageuser{
      width: 51px;
      height: 51px;
      margin-left: 170px;
      margin-top: 10px;

        img{
          height: 100%;
          border-radius:98px;
        }
    }
`