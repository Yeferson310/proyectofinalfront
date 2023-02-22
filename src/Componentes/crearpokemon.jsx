
import React from "react";
import "./Crearpokemon";


function Crearpokemon() {
    
    return(
        <><title>formulario de registro pokemones</title>
            <section class="form-register">
                <input class="controls" type="text" name="nombre" id="nombre" placeholder="ingrese su nuevo pokemon" />
                <input class="controls" type="text" name="tipo" id="tipo" placeholder="ingrese el tipo del pokemon" />
                <input class="controls" type="text" name="movimiento" id="movimiento" placeholder="ingrese el movimiento del pokemon" />
                <input class="controls" type="text" name="estadisticas" id="estadisticas" placeholder="ingrese sus estadisticas pokemon" />
                <input class="boton" type="submit" name="nombre" value="Registrar" />
            </section>
        </>
    );
    
}

export default Crearpokemon;
