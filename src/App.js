import React from "react";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="content">
        <input type="text" placeholder="Search..."/>
        <h2 className="title">Categorias</h2>
        <p className="subtitle">Elige nuestras deliciosas pizzas </p>
        <div className="tabs">
          <div className="tabs__item tabs__item-active">Pizzas</div>
          <div className="tabs__item">Empanadas </div>
          <div className="tabs__item">Bebidas</div>
          <div className="tabs__item">Postres</div>
        </div>
        <div className="items">
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
