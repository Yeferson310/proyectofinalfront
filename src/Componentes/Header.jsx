import "./Header.css";
import { Link } from "react-router-dom";
function Header(props) {
    return (
        <div className="header">
        <div className="logo-title">
          <img src="/img/Pokeball.png" alt="Logo Pokeball" />
          <h1>Pokédex</h1>
        </div>
        <div>
        <Link to={"login"}>Ingresar</Link>
        </div>
        <div>
        <Link to={"crearpokemon"}>Crearpokemon</Link>
        </div>

  
        <div onClick={props.ordenar}>
          {
            props.sorted?<img src="/img/downHastag.png" alt="downArrow" />:<img src="/img/az.png" alt="downArrow" />
          }
          
        </div>
      </div>
    );
  }
  export default Header;