import "./Header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header(props) {
  // localStorage.getItem("lastname");
  const [logueado, setLogueado] = useState(false);
  const navigate = useNavigate();
  useEffect(function () {
    if (localStorage.getItem("logueado") === "true") {
      setLogueado(true);
    } else {
      setLogueado(false);
    }
  }, []);
  function salir() {
    localStorage.setItem("logueado", false);
    navigate(0);

  }
  return (
    <div className="header">
      <div className="logo-title">
        <img src="/img/Pokeball.png" alt="Logo Pokeball" />
        <h1>Pokédex</h1>
      </div>
      <div className="botoningresar">
        <Link to={"login"}>Ingresar</Link>
      </div>
      <br />
      {logueado ? (
        <div className="botoningresar2">
          <Link to={"crearpokemon"}>Crearpokemon</Link>
        </div>
      ) : (
        ""
      )}

      <div className="botoningresar2" >
        <button onClick={salir}> Salir</button>
      </div>
      <div onClick={props.ordenar}>
        {props.sorted ? (
          <img src="/img/downHastag.png" alt="downArrow" />
        ) : (
          <img src="/img/az.png" alt="downArrow" />
        )}
      </div>
      
    </div>
  );
}
export default Header;
