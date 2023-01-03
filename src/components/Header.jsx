import "../styles.css";
import { Link } from "react-router-dom";
import useShop from "../ShopContext";

const Header = () => {
  const { products } = useShop();

  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="logo">
        Maqaayad
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link links">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link links">
              Cart
            </Link>
          </li>
        </ul>
        <div className="ms-auto cart__div">
          <Link to="/cart">
            <span className="cart__num ">{products.length}</span>
            <i className="fa-solid fa-cart-shopping cart"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
