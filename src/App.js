import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./img/logo.png";
import buscar from "./img/buscar.png";
import pokeball from "./img/pokeball.png";
import obrigado from "./img/obrigado.png";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [modal, setModal] = useState(false);
  function getPokemon() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then(res => {
      res.data.results.map(item => {
        return axios.get(item.url).then(({ data }) => {
          return setPokemon(pokemon => [
            ...pokemon,
            { ...data, price: (Math.random() * 1000 + 1).toFixed(2) }
          ]);
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
  useEffect(() => {
  const totalPrice = cart.reduce((total, cv) => total + Number(cv.price), 0);
  setTotalCart(totalPrice.toFixed(2));
}, [totalCart, cart]);
const handleDisplayModal = () => {
  setModal(true);
  setTimeout(() => {
    setCart([]);
    setModal(false);
    setTotalCart(0);
  }, 2000);
}
  return (
    <div className="App">
      <div className="header" id="header">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <input id="busca" className="busca" placeholder="Busque aqui!" />
          <button id="buscar" className="btn-buscar">
            <img src={buscar} alt="buscar" />
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
        <div className="totalCart">
          <p><b>Total</b></p>
          <p>{totalCart}</p>
        </div>
        <button className="finalizar" onClick={handleDisplayModal}>Finalizar compra</button>
      </div>
      <div className={ modal ? "modal" : "modalOff" }>
        <img src={obrigado} />
        <p>Compra realizada com sucesso!</p>
      </div>
    </div>
  );
}

export default App;
