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

        <div className="dropdown">
          <div className="dropdown-link" aria-hidden="true">
            Categories
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="dropdown-content">
            <Link to="/books/subject/mystery">Mystery</Link>
            <Link to="/books/subject/romance">Romance</Link>
            <Link to="/books/subject/science-fiction">Science Fiction</Link>
            <Link to="/books/subject/fantasy">Fantasy</Link>
            <Link to="/books/subject/thriller">Thriller</Link>
            <Link to="/books/subject/memoir">Memoir</Link>
            <Link to="/books/subject/essays">Essays</Link>
          </div>
        </div>

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
