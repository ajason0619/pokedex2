import React from "react";
import { useState } from "react";
const CaughtPokemon = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const updateCart = () => {
    setCart(cart.concat("bread"));
  };
  const updateCount = () => {
    setCount(count + 1);
    console.log("count", count);
  };
  return (
    <div>
      <p>Caught {count} pokemon</p>
      <ul>
        {cart.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={updateCart}>Add product</button>
    </div>
  );
};

export default CaughtPokemon;
