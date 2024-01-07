import "bootstrap/dist/css/bootstrap.css";

export default function Header() {
  return (
    <nav
      className="navbar bg-body-tertiary"
      style={{
        height: "7rem",
      }}
    >
      <div
        className="container-fluid"
        style={{
          justifyContent: "center",
          display: "flex",
          textTransform: "uppercase",
          textDecoration: "underline",
        }}
      >
        <span className="navbar-brand mb-0 h1">🍕 Our Pizza E-shop 🍕</span>
      </div>
    </nav>
  );
}
