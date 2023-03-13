import React, { useRef, useEffect, useState } from "react";
import "./Crearpokemon.css";
import { useNavigate } from "react-router-dom";

function Crearpokemon() {
  const nombre = useRef();
  const navigate = useNavigate();
  function enviar() {

   
      let data = { nombre : nombre.current.value};
      fetch("http://localhost:3001/pkmn", {
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
            //return { msg: " usuario no autorizado" };
          }
        })
  
        .then(function (myJson) {
          if (myJson.msg === "ok") {
            navigate("/");
          } else {
            alert(myJson.msg); // utilizar un modal 
          }
  
      
        });
  }
  return (
    <>
      <title>formulario de registro pokemones</title>
      <section className="form-register">
      <label className="nombre">nombre:</label>
      <input type="text" ref={nombre} />
        <br />
        
        
        <button className="boton" onClick={enviar}>
          Enviar
        </button>
      </section>
    </>
  );
}

export default Crearpokemon;

//armar los forularios con los 15 valores mas file 1
// api en la ruta post/pkmn recibir los 15 valores y asignarselos a las 15 variables 3
// api recibir archivo file y guardarlo en carpeta img y guardar el nombre en base de datos 2
