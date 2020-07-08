import React from "react";
import logo from "./img/logo.png";
import buscar from "./img/buscar.png";
import bulba from "./img/bulba.png";
import pokeball from "./img/pokeball.png";
import "./App.css";

function App() {
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
        <div className="spacer">
        </div>
      </div>

      <div className="grid"> 
        <div className="card">
          <div>
            <img src={bulba} />
          </div>
          <div className="infos">
            <h5>Bulbasaur</h5>
            <div className="tipos">  
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
            <h6 className="preco">R$ 10.00</h6>
          </div>
          <button className="adicionar">Eu quero!</button>
        </div>

     <div className="card">
          <div>
            <img src={bulba} />
          </div>
          <div className="infos">
            <h5>Bulbasaur</h5>
            <div className="tipos">  
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
            <h6 className="preco">R$ 10.00</h6>
          </div>
          <button className="adicionar">Eu quero!</button>
        </div>

           <div className="card">
          <div>
            <img src={bulba} />
          </div>
          <div className="infos">
            <h5>Bulbasaur</h5>
            <div className="tipos">  
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
            <h6 className="preco">R$ 10.00</h6>
          </div>
          <button className="adicionar">Eu quero!</button>
        </div>

           <div className="card">
          <div>
            <img src={bulba} />
          </div>
          <div className="infos">
            <h5>Bulbasaur</h5>
            <div className="tipos">  
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
            <h6 className="preco">R$ 10.00</h6>
          </div>
          <button className="adicionar">Eu quero!</button>
        </div>

           <div className="card">
          <div>
            <img src={bulba} />
          </div>
          <div className="infos">
            <h5>Bulbasaur</h5>
            <div className="tipos">  
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
            <h6 className="preco">R$ 10.00</h6>
          </div>
          <button className="adicionar">Eu quero!</button>
        </div>

           <div className="card">
          <div>
            <img src={bulba} />
          </div>
          <div className="infos">
            <h5>Bulbasaur</h5>
            <div className="tipos">  
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
            <h6 className="preco">R$ 10.00</h6>
          </div>
          <button className="adicionar">Eu quero!</button>
        </div>

           <div className="card">
          <div>
            <img src={bulba} />
          </div>
          <div className="infos">
            <h5>Bulbasaur</h5>
            <div className="tipos">  
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
            <h6 className="preco">R$ 10.00</h6>
          </div>
          <button className="adicionar">Eu quero!</button>
        </div>

           <div className="card">
          <div>
            <img src={bulba} />
          </div>
          <div className="infos">
            <h5>Bulbasaur</h5>
            <div className="tipos">  
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
            <h6 className="preco">R$ 10.00</h6>
          </div>
          <button className="adicionar">Eu quero!</button>
        </div>

           <div className="card">
          <div>
            <img src={bulba} />
          </div>
          <div className="infos">
            <h5>Bulbasaur</h5>
            <div className="tipos">  
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
            <h6 className="preco">R$ 10.00</h6>
          </div>
          <button className="adicionar">Eu quero!</button>
        </div>

           <div className="card">
          <div>
            <img src={bulba} />
          </div>
          <div className="infos">
            <h5>Bulbasaur</h5>
            <div className="tipos">  
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
            <h6 className="preco">R$ 10.00</h6>
          </div>
          <button className="adicionar">Eu quero!</button>
        </div>

           <div className="card">
          <div>
            <img src={bulba} />
          </div>
          <div className="infos">
            <h5>Bulbasaur</h5>
            <div className="tipos">  
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
            <h6 className="preco">R$ 10.00</h6>
          </div>
          <button className="adicionar">Eu quero!</button>
        </div>

           <div className="card">
          <div>
            <img src={bulba} />
          </div>
          <div className="infos">
            <h5>Bulbasaur</h5>
            <div className="tipos">  
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
            <h6 className="preco">R$ 10.00</h6>
          </div>
          <button className="adicionar">Eu quero!</button>
        </div>

           <div className="card">
          <div>
            <img src={bulba} />
          </div>
          <div className="infos">
            <h5>Bulbasaur</h5>
            <div className="tipos">  
              <p className="grass">Grass</p>
              <p className="poison">Poison</p>
            </div>
            <h6 className="preco">R$ 10.00</h6>
          </div>
          <button className="adicionar">Eu quero!</button>
        </div>
      </div>
  
  <div className="carrinho">
  <div className="cart-header">
    <img src={pokeball} />
    <h3>Meu Carrinho</h3>
  </div>

  <div className="card-holder">
    <div className="cart-card">
      <img src={bulba} />
      <h5>Bulbasaur</h5>
      <h6 className="preco">R$ 4.00</h6>
    </div>


  <div className="cart-card">
      <img src={bulba} />
      <h5>Bulbasaur</h5>
      <h6 className="preco">R$ 4.00</h6>
    </div>

  <div className="cart-card">
      <img src={bulba} />
      <h5>Bulbasaur</h5>
      <h6 className="preco">R$ 4.00</h6>
    </div>
  </div>
  
  <button className="finalizar">Finalizar compra</button>
</div>

    
    </div> 
  );
}

export default App;
