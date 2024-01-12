import "./index.css";

export default function Footer() {
  const time = new Date().getHours().toLocaleString();
  const openingTime = 12;
  const closingTime = 22;
  const workingTime = time <= closingTime && time >= openingTime;
  return (
    <footer className="footer common">
      {workingTime
        ? `We are open from ${openingTime} : 00 to ${closingTime} : 00 to serve you in our's shop.`
        : `Sorry our shop is closed`}
    </footer>
  );
}
