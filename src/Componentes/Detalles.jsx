import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "./Detalles.css";
import { useEffect } from "react";

function Detalles(props) {
  const { id_pkmn } = useParams();
  const [pokemon, setPokemon] = useState("");
  const [pokemonTotal, setPokemonTotal] = useState(0);
  
  
//crear id del pokemon

  useEffect(() => {
    fetch("http://localhost:3001/pkmn/"+id_pkmn, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })

      .then(function (myJson) {
        setPokemon(myJson.pokemons[0]);// 0 devolver array 
      });
    

  }, [id_pkmn]);
 
  useEffect(() => {
    fetch("http://localhost:3001/pokemonstotal/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })

      .then(function (myJson) {
        setPokemonTotal(myJson.length[0].total);
      });

  }, [id_pkmn]);
  return (
    <div className="details-card" style={{ backgroundColor: pokemon.color1 }}>
      {/* HEADER */}
      <div className="details-header">
        <div className="arrow-name">
          <Link to="../">
            <img src="/img/arrow-left.svg" alt="backArrow" className="arrows" />
          </Link>

          <h2>{pokemon?.name}</h2>
        </div>
        <div>
          <p>#{pokemon?.idd}</p>
        </div>
      </div>

      {/* IMAGEN */}
      <section className="img-floating">
        <div className="pokemon-photo">
        <Link to={`/pkmn/${pokemon.id - 1 === 0?pokemonTotal*1 :pokemon.id - 1}`}>

            <img
              src="/img/left.png"
              alt="previous page"
              width="25px"
              height="25px"
              className="arrows"
            />
          </Link>
          <img src={"http://localhost:3001"+pokemon?.imagen} alt="pokemon" />
          <Link to={`/pkmn/${pokemon.id + 1 === pokemonTotal*1 + 1?1:pokemon.id + 1}`}>

            <img
              src="/img/next.png"
              alt="next page"
              width="25px"
              height="25px"
              className="arrows"
            />
          </Link>
        </div>
      </section>

      {/* SECTION DETAILS */}
      <section className="pokemon-details">
        {/* POKEMON TYPE */}
        <div className="pokemon-type">pokemon type</div>

        {/* ABOUT */}
        <article className="about">
          <h3 className="about-title">About</h3>

          <div className="about-data">
            <div className="about-scales">
              <div className="scales">
                <img src="/img/Weight.svg" alt="balance" />
                <h5>{pokemon?.weight}</h5>
              </div>
              <p> Weight</p>
            </div>

            <div className="about-scales">
              <div className="scales">
                <img src="/img/Height.svg" alt="rule" />
                <h5>{pokemon?.height}</h5>
              </div>
              <p> Height</p>
            </div>

            <div className="about-moves">
              <h5>{pokemon?.moves}</h5> <p>Moves</p>
            </div>
          </div>
          <p className="about-description">{pokemon?.description}</p>
        </article>

        {/* BASE STATS */}
        <div className="base-stats">
          <h3 className="stats-title">Base Stats</h3>
          <div>
            <ul>
              <li>
                HP <span className="stats-number">{pokemon?.hp}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.hp}
                  />
                </span>
              </li>
              <li>
                ATK <span className="stats-number">{pokemon?.atk}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.atk}
                  />
                </span>
              </li>
              <li>
                DEF <span className="stats-number">{pokemon?.def}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.def}
                  />
                </span>
              </li>
              <li>
                SATK{" "}
                <span className="stats-number">{pokemon?.satk}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.satk}
                  />
                </span>
              </li>
              <li>
                SDEF{" "}
                <span className="stats-number">{pokemon?.sdef}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.sdef}
                  />
                </span>
              </li>
              <li>
                SPD <span className="stats-number">{pokemon?.spd}</span>
                <span>
                  <input
                    className="stats-bars"
                    type="range"
                    min={0}
                    max={100}
                    value={pokemon?.spd}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Detalles;
