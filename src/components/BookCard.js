import { useState } from "react";
import "../styles/BookCard.css";

const BookCard = ({ book, isInCart, addToCart, removeFromCart }) => {
  const [cartStatus, setCartStatus] = useState(
    isInCart(book.cover_edition_key)
  );

  function onClick(e) {
    if (cartStatus) {
      removeFromCart(e);
      setCartStatus(false);
    } else {
      addToCart(e);
      setCartStatus(true);
    }
  }

  return (
    <article className="BookCard">
      <img
        src={
          book.cover_edition_key
            ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}.jpg`
            : "https://via.placeholder.com/150x200.png?text=Cover+Not+Available"
        }
        alt="Book cover"
      ></img>
      <div className="BookCard-details">
        <h3>{book.title}</h3>
        <h4>by {book.authors?.[0]?.name || book.author_name}</h4>
      </div>
      <button
        onClick={onClick}
        data-work-id={book.key}
        data-edition-id={book.cover_edition_key}
        className={cartStatus ? "in-cart" : "not-in-cart"}
      >
        {cartStatus ? "Remove from Cart" : "Add to Cart"}
      </button>
    </article>
  );
};

export default BookCard;
