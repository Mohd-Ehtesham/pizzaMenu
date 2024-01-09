export default function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div
        className="container-fluid"
        style={{
          justifyContent: "space-between",
          display: "flex",
          textTransform: "uppercase",
          textDecoration: "underline",
          marginLeft: "38rem",
        }}
      >
        <span className="navbar-brand mb-0 h1">🍕 Our Pizza E-shop 🍕</span>
        <span className="navbar-brand mb-0 h1">📱 0000-0000-00</span>
      </div>
    </nav>
  );
}
