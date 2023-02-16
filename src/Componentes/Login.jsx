import React,{ useRef,useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Login.css";


function Login(props) {
  const usuario = useRef();
  const clave = useRef();

 function autenticar(){
  let valorUsuario = usuario.current.value;
  let valorClave = clave.current.value;
  alert("autenticando..."+ valorUsuario + valorClave);
 }
  return (
    <div>
      <label>usuario:</label>
      <input type="text" ref={usuario}/>
      <label>clave:</label>
      <input type="password"ref={clave}/>
      <button onClick={autenticar}>Ingresar</button>
      
    </div>
    
  );
}
export default Login;
