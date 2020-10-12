import React, { useState, useEffect } from "react";
import "./styles.css";

function buscaDados() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  return fetch(url)
    .then(async (response) => await response.json())
    .then(async (dados) => {
      return await dados;
    })
    .catch((err) => console.error("Erro ao buscar dados", err));
}

export default function App() {
  const [poke, setPoke] = useState([]);
  useEffect(() => {
    buscaDados().then((dados) => setPoke(dados.results));
  }, []);
  return (
    <div className="Container">
      <div className="App row">
        <div className="col-10 offset-1">
          <h1 className="py-5">Pokémon e seus movimentos</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Nome </th>
                <th>Movimentos </th>
              </tr>
            </thead>
            <tbody>
              {poke.map(function (item, index) {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.url}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
