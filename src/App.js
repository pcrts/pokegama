import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./img/logo.png";
import buscar from "./img/buscar.png";
import bulba from "./img/bulba.png";
import pokeball from "./img/pokeball.png";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [cart, setCart] = useState([]);
  function getPokemon() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then(res => {
      res.data.results.map(item => {
        axios.get(item.url).then(({ data }) => {
          setPokemon(pokemon => [
            ...pokemon,
            { ...data, price: (Math.random() * 1000 + 1).toFixed(2) }
          ]);
          console.log(data);
        });
      });
    });
  }
  useEffect(() => {
    (async () => {
      await getPokemon();
    })();
  }, []);
  useEffect(() => console.log(cart), [cart]);
  return (
    <div className="App">
      <div className="header" id="header">
        <div>
          <img src={logo} />
        </div>
        <div className="search">
          <input id="busca" className="busca" placeholder="Busque aqui!" />
          <button id="buscar" className="btn-buscar">
            <img src={buscar} />
          </button>
        </div>
        <div className="spacer"></div>
      </div>

      <div className="grid">
        {pokemon.length
          ? pokemon.map(item => (
              <div className="card">
                <div>
                  <img src={item.sprites.front_default} />
                </div>
                <div className="infos">
                  <h5>{item.name}</h5>
                  <div className="tipos">
                    {item.types.map(({ type }) => (
                      <p className={type.name}>{type.name}</p>
                    ))}
                  </div>
                  <h6 className="preco">R$ {item.price}</h6>
                </div>
                <button
                  className="adicionar"
                  onClick={() => setCart(carrinho => [...carrinho, item])}
                >
                  Eu quero!
                </button>
              </div>
            ))
          : null}
      </div>

      <div className="carrinho">
        <div className="cart-header">
          <img src={pokeball} />
          <h3>Meu Carrinho</h3>
        </div>

        <div className="card-holder">
          {cart.map(item => (
            <div className="cart-card">
              <img src={item.sprites.front_default} />
              <h5>{item.name}</h5>
              <h6 className="preco">{item.price}</h6>
            </div>
          ))}
        </div>
        <button className="finalizar">Finalizar compra</button>
      </div>
    </div>
  );
}

export default App;
