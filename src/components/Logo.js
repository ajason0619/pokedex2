import React from "react";
const Logo = ({ appName, handleClick }) => {
  const onClicked = () => {
    console.log("You clicked the heading");
  };
  return (
    <header>
      <h1 onClick={handleClick}>Welcome to {appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokedex"
      />
    </header>
  );
};

export default Logo;
