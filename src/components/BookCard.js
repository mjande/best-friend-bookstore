import { useState } from "react";
import "../styles/BookCard.css";

const BookCard = ({ book, addToCart }) => {
  const [inCart, toggleInCart] = useState(false);

  const buttonClick = (e) => {
    toggleInCart(!inCart);

    if (inCart) {
      // Remove from cart callback
    } else {
      addToCart(e);
    }
  };

  return (
    <article className="BookCard">
      <img
        src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`}
        alt="Book cover"
      ></img>
      <div className="BookCard-details">
        <h3>{book.title}</h3>
        <h4>by {book.authors[0].name}</h4>
      </div>
      <button
        onClick={buttonClick}
        data-work-id={book.key}
        data-edition-id={book.cover_edition_key}
        className={inCart ? "in-cart" : "not-in-cart"}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </article>
  );
};

export default BookCard;
