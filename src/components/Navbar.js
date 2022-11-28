import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-left">
        <FontAwesomeIcon icon={faPaw} size="xl" />
        <h1>Best Friend Bookstore</h1>
      </div>

      <div className="nav-links">
        <div>Fiction</div>
        <div>Nonfiction</div>
        <div>
          Categories
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
