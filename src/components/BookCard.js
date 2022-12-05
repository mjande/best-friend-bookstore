import "../styles/BookCard.css";

const BookCard = ({ book, addToCart }) => {
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
        onClick={addToCart}
        data-work-id={book.key}
        data-edition-id={book.cover_edition_key}
      >
        Add to Cart
      </button>
    </article>
  );
};

export default BookCard;
