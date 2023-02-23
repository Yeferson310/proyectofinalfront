
import React from "react";
import './Crearpokemon.css'


function Crearpokemon() {
    
    return(
        <><title>formulario de registro pokemones</title>
            <section class="form-register">
                <input class="controls" type="text" name="nombre" id="nombre" placeholder="ingrese su nuevo pokemon" /><br />
                <input class="controls" type="text" name="tipo" id="tipo" placeholder="ingrese el tipo del pokemon" /><br />
                <input class="controls" type="text" name="movimiento" id="movimiento" placeholder="ingrese el movimiento del pokemon" /><br />
                <input class="controls" type="text" name="estadisticas" id="estadisticas" placeholder="ingrese sus estadisticas pokemon" /><br />
                <input class="boton" type="submit" name="nombre" value="Registrar" /><br />
            </section>
        </>
    );
    
}

export default Crearpokemon;
