import React from "react";

export default function Pizza({
  name,
  photoName,
  ingredients,
  price,
  quantity,
  onIncreasePrice,
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
          <button className="btn btn-sm btn-primary" onClick={onIncreasePrice}>
            Increase Price
          </button>
          <button className="btn btn-sm btn-warning">Decrease Price</button>
          <h6>Quantity: {quantity}</h6>
          <button className="btn btn-sm btn-primary">Increase Quantity</button>
          <button className="btn btn-sm btn-warning">Decrease Quantity</button>
        </div>
      </li>
    </div>
  );
}
