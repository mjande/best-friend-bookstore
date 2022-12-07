import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCaretDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const NavBar = ({ cartCount, toSearchPage }) => {
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    if (data.get("search") === "") return;

    navigate(`/books/search/${data.get("search")}`);
  }

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
        <form onSubmit={onSubmit}>
          <input type="text" name="search"></input>
          <button>Search</button>
        </form>
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
