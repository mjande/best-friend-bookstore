import "../styles/BookCard.css";

const BookCard = ({ title, author, coverSrc, workKey, addToCart }) => {
  return (
    <article className="BookCard">
      <img
        src={`https://covers.openlibrary.org/b/id/${coverSrc}.jpg`}
        alt="Book cover"
      ></img>
      <div className="BookCard-details">
        <h3>{title}</h3>
        <h4>by {author}</h4>
      </div>
      <button onClick={addToCart} data-work-id={workKey}>
        Add to Cart
      </button>
    </article>
  );
};

export default BookCard;
