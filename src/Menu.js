import Pizza from "./Pizza";
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
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
          textTransform: "uppercase",
          textDecoration: "underline",
        }}
      >
        Our Menu
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
          {pizzaData.map((pizza) =>
            pizza.soldOut ? (
              <span
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
                name={pizza.name}
                photoName={pizza.photoName}
                ingredients={pizza.ingredients}
                price={pizza.price}
                quantity={pizza.quantity}
                soldOut={pizza.soldOut}
              />
            )
          )}
        </ul>
      </div>
    </>
  );
}
