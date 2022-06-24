import "./App.css";
import React from "react";
import Logo from "./components/Logo";
import BestPokemon from "./components/BestPokemon";
import CaughtPokemon from "./components/CaughtPokemon";
function App() {
  const onClicked = () => {
    console.log("clicked function that is passed as props");
  };
  let abilities = ["Anticipation", "Adaptability", "Run-Away", "Immortal"];
  return (
    <div>
      <Logo appName="Pokedex" handleClick={onClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon />
    </div>
  );
}

export default App;
