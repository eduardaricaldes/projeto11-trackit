import logo from "../assets/logo.png";
export default function Login (){
  return(
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo"></img></div>
        <div className="inputs">
          <input className="email" type="email" placeholder="email"></input>
          <input className="senha" type="password" placeholder="senha"></input>
        </div>
        <bottom>Entrar</bottom>
        <p>Não tem uma conta? Cadastre-se!</p>
      </div>
    
  )
}