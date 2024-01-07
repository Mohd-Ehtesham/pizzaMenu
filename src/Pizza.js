import React from "react";

export default function Pizza({
  name,
  photoName,
  ingredients,
  price,
  quantity,
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
          <h6>Quantity: {quantity}</h6>
        </div>
      </li>
    </div>
  );
}
