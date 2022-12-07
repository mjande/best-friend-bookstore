import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCaretDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const NavBar = ({ cartCount }) => {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="header">
          <FontAwesomeIcon icon={faBook} size="xl" />
          <h1>Booklovers Bookstore</h1>
        </Link>
        <a href="#" className="categories-link">
          Categories
          <FontAwesomeIcon icon={faCaretDown} />
        </a>
      </div>

      <div className="nav-right">
        <Link to="/cart" className="cart-link">
          <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" />
          <div data-testid="cart-items-count">{cartCount} items</div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
