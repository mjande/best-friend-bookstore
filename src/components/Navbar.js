import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faCaretDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const NavBar = ({ cartCount }) => {
  return (
    <nav>
      <div className="nav-left">
        <FontAwesomeIcon icon={faPaw} size="xl" />
        <h1>Best Friend Bookstore</h1>
        <a href="#" className="categories-link">
          Categories
          <FontAwesomeIcon icon={faCaretDown} />
        </a>
      </div>

      <div className="nav-right">
        <a href="#" className="cart-link">
          <FontAwesomeIcon icon={faCartShopping} aria-hidden="true" />
          <div data-testid="cart-items-count">{cartCount} items</div>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
