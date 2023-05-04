import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/" className="navigation-link">
        Home
      </Link>
      <Link to="/product" className="navigation-link">
        Product
      </Link>
      <Link to="/create" className="navigation-link">
        Create
      </Link>
    </nav>
  );
}
