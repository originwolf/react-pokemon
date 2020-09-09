import React, { useState, useEffect } from "react";
import "./styles.css";

function buscaDados() {
  const url = "https://covid19-brazil-api.now.sh/api/report/v1";
  return fetch(url)
    .then(async (response) => await response.json())
    .then(async (dados) => {
      return await dados;
    })
    .catch((err) => console.error("Erro ao buscar dados", err));
}

export default function App() {
  const [casos, setCasos] = useState([]);
  useEffect(() => {
    buscaDados().then((dados) => setCasos(dados.data));
  }, []);
  return (
    <div className="Container">
      <div className="App row">
        <div className="col-10 offset-1">
          <h1 className="py-5">Casos e mortes por estado</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Estado </th>
                <th>UF </th>
                <th>Casos </th>
                <th>Mortes </th>
                <th>Suspeitos </th>
                <th>Falsos </th>
              </tr>
            </thead>
            <tbody>
              {casos.map(function (item, index) {
                return (
                  <tr key={index}>
                    <td>{item.state}</td>
                    <td>{item.uf}</td>
                    <td>{item.cases}</td>
                    <td>{item.deaths}</td>
                    <td>{item.suspects}</td>
                    <td>{item.refuses}</td>
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
