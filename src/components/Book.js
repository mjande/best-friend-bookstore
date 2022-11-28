import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
  faStarHalfStroke,
} from "@fortawesome/free-regular-svg-icons";

import "../styles/Book.css";

const Book = ({ title, author, image, rating }) => {
  function stars() {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating - i >= 1) {
        stars.push(<FontAwesomeIcon icon={fasStar} />);
      } else if (rating - i === 0.5) {
        stars.push(
          <FontAwesomeIcon icon={faStarHalfStroke} aria-hidden="true" />
        );
      } else {
        stars.push(<FontAwesomeIcon icon={farStar} />);
      }
    }

    return stars;
  }

  return (
    <div className="Book">
      <img src={image} alt="Book cover"></img>
      <div className="Book-details">
        <h3>{title}</h3>
        <div>By {author}</div>
        <div
          className="stars-container"
          role="img"
          aria-label={`Rating: ${rating} out of 5 stars`}
        >
          {stars()}
        </div>
      </div>
    </div>
  );
};

export default Book;
