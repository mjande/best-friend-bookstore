import "../styles/Book.css";

const Book = ({ title, author, coverSrc }) => {
  return (
    <article className="Book">
      <img
        src={`https://covers.openlibrary.org/b/id/${coverSrc}.jpg`}
        alt="Book cover"
      ></img>
      <div className="Book-details">
        <h3>{title}</h3>
        <h4>by {author}</h4>
      </div>
    </article>
  );
};

export default Book;
