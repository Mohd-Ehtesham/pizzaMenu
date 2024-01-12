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
          <img className="img" src={photoName} alt={name} />
          <h6>Name: {name}</h6>
          <h6>Ingridients: {ingredients}</h6>
          <h6>
            Price: {price}$
            <button
              className="btn btn-sm btn-primary"
              style={{ marginLeft: "0.5rem" }}
              onClick={() => onIncreasePrice(name)}
            >
              +
            </button>
            <button
              className="btn btn-sm btn-warning"
              style={{ marginLeft: "0.5rem" }}
              onClick={() => onDecreasePrice(name)}
            >
              -
            </button>
          </h6>

          <h6>
            Quantity: {quantity}
            <button
              className="btn btn-sm btn-primary"
              style={{ marginLeft: "0.5rem" }}
              onClick={() => onIncreasePizzaQuantity(name)}
            >
              &uarr;
            </button>
            <button
              className="btn btn-sm btn-warning"
              style={{ marginLeft: "0.5rem" }}
              onClick={() => onDecreasePizzaQuantity(name)}
            >
              &darr;
            </button>
          </h6>
        </div>
      </li>
      <button
        onClick={() => onTogglePizzaAvailability(name)}
        className="btn bt-small btn-badge btn-warning"
      >
        Availability
      </button>
    </div>
  );
}
