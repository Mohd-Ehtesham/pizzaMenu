import { useState } from "react";
import Pizza from "./Pizza";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    quantity: 14,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    quantity: 21,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    quantity: 17,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    quantity: 7,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    quantity: 19,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
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

  const increasePizzaPrice = (name) => {
    setPizzaObject((pizzaObject) =>
      pizzaObject.map((pizza) =>
        pizza.name === name ? { ...pizza, price: pizza.price + 20 } : pizza
      )
    );
  };

  const decreasePizzaPrice = (name) => {
    setPizzaObject((pizzaObject) =>
      pizzaObject.map((pizza) =>
        pizza.name === name ? { ...pizza, price: pizza.price - 20 } : pizza
      )
    );
  };

  const increasePizzaQuantity = (name) => {
    setPizzaObject((pizzaObject) =>
      pizzaObject.map((pizza) =>
        pizza.name === name ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  const decreasePizzaQuantity = (name) => {
    setPizzaObject((pizzaObject) =>
      pizzaObject.map((pizza) =>
        pizza.name === name ? { ...pizza, quantity: pizza.quantity - 1 } : pizza
      )
    );
  };

  const togglePizzaAvailability = (name) => {
    setPizzaObject((pizzaObject) =>
      pizzaObject.map((pizza) =>
        pizza.name === name ? { ...pizza, soldOut: !pizza.soldOut } : pizza
      )
    );
  };

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
            pizzaObject.map((pizza) =>
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
                  onIncreasePrice={increasePizzaPrice}
                  onDecreasePrice={decreasePizzaPrice}
                  onIncreasePizzaQuantity={increasePizzaQuantity}
                  onDecreasePizzaQuantity={decreasePizzaQuantity}
                  onTogglePizzaAvailability={togglePizzaAvailability}
                />
              )
            )}
        </ul>
      </div>
    </>
  );
}
