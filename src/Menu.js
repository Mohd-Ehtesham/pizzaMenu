import { useState } from "react";
import Pizza from "./Pizza";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const pizzaData = [
  {
    id: 0,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    quantity: 14,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    id: 1,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    quantity: 21,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    id: 2,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    quantity: 17,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    id: 3,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    quantity: 7,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    id: 4,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    quantity: 19,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    id: 5,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    quantity: 11,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(true);
  const [pizzaObject, setPizzaObject] = useState(pizzaData);

  function handleIncreasePrice(id) {
    console.log("Clicked on pizza with id:", id);
    const updatedPizzaObject = pizzaObject.map((pizza) => {
      if (pizza.id === id) {
        return {
          ...pizza,
          price: pizza.price + 20,
        };
      }
      return pizza;
    });
    console.log("Updated Pizza Object:", updatedPizzaObject);
    setPizzaObject(updatedPizzaObject);
  }

  function handleDecreasePrice(id) {
    console.log("Clicked on pizza with id:", id);
    const updatedPizzaObject = pizzaObject.map((pizza) => {
      if (pizza.id === id) {
        return {
          ...pizza,
          price: pizza.price - 20,
        };
      }
      return pizza;
    });
    console.log("Updated Pizza Object:", updatedPizzaObject);
    setPizzaObject(updatedPizzaObject);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "2rem",
          textTransform: "uppercase",
          marginLeft: "41rem",
          marginRight: "5rem",
        }}
      >
        <h3>Our Menu </h3>
        <button
          className="btn btn-danger btn-small"
          onClick={() => setIsOpen(!isOpen)}
        >
          X
        </button>
      </div>
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4.8rem",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4.8rem",
            marginTop: "revert",
          }}
        >
          {isOpen &&
            pizzaData.map((pizza) =>
              pizza.soldOut ? (
                <span
                  key={pizza.name}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  We are currently out of stock. 🙁
                </span>
              ) : (
                <Pizza
                  key={pizza.name}
                  id={pizza.id}
                  name={pizza.name}
                  photoName={pizza.photoName}
                  ingredients={pizza.ingredients}
                  price={pizza.price}
                  quantity={pizza.quantity}
                  soldOut={pizza.soldOut}
                  onIncreasePrice={handleIncreasePrice}
                  onDecreasePrice={handleDecreasePrice}
                />
              )
            )}
        </ul>
      </div>
    </>
  );
}
