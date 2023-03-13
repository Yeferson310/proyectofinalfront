import React, { useRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Login.css";

//Importamos useHistory para navegar
import { useNavigate } from "react-router-dom";

function Login(props) {
  const usuario = useRef();
  const clave = useRef();
  const navigate = useNavigate();

  function autenticar() {
    let valorUsuario = usuario.current.value;
    let valorClave = clave.current.value;
    let data = { usuario: valorUsuario, clave: valorClave };
    fetch("http://localhost:3001/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          return response.json();
        } else {
          return { msg: " usuario no autorizado" };
        }
      })

      .then(function (myJson) {
        if (myJson.msg === "ok") {
          loginExitoso();
        } else {
          alert(myJson.msg); // utilizar un modal 
        }

    
      });
  }
  function loginExitoso() {
    localStorage.setItem("logueado", true);
    navigate("/");
  }
  return (
    <div className="contenedor">
      <label className="usuario">usuario:</label>
      <input type="text" ref={usuario} />
      <label className="password">clave:</label>
      <input type="password" ref={clave} />
      <button onClick={autenticar}>Ingresar</button>
    </div>
  );
}
export default Login;
