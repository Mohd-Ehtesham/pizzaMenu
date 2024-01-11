import React from "react";

export default function Pizza({
  id,
  name,
  photoName,
  ingredients,
  price,
  quantity,
  onIncreasePrice,
  onDecreasePrice,
  onIncreasePizzaQuantity,
  onDecreasePizzaQuantity,
  onTogglePizzaAvailability,
}) {
  return (
    <div>
      <li>
        <div>
          <img
            src={photoName}
            alt={name}
            style={{ height: "6rem", borderRadius: "10rem" }}
          />
          <h6>Name: {name}</h6>
          <h6>Ingridients: {ingredients}</h6>
          <h6>Price: {price}$</h6>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => onIncreasePrice(name)}
          >
            Increase Price
          </button>
          <button
            className="btn btn-sm btn-warning"
            onClick={() => onDecreasePrice(name)}
          >
            Decrease Price
          </button>
          <h6>Quantity: {quantity}</h6>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => onIncreasePizzaQuantity(name)}
          >
            Increase Quantity
          </button>
          <button
            className="btn btn-sm btn-warning"
            onClick={() => onDecreasePizzaQuantity(name)}
          >
            Decrease Quantity
          </button>
          <button onClick={() => onTogglePizzaAvailability(name)}>
            Availability
          </button>
        </div>
      </li>
    </div>
  );
}
