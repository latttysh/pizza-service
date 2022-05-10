import React from "react";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="content">
        <input type="text" placeholder="Search..."/>
        <h2 className="title">Categorias</h2>
        <p className="subtitle">Elige nuestras deliciosas pizzas </p>
        <div className="tabs">
          <ul>
            <li>Pizzas</li>
            <li>Empanadas</li>
            <li>Bebidas</li>
            <li>Postres</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
