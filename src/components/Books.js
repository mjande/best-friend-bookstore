import BookCard from "./BookCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "../styles/Category.css";

const Books = ({ addToCart }) => {
  const params = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `http://openlibrary.org/subjects/${params.category.toLowerCase()}.json`,
        {
          mode: "cors",
        }
      );

      const json = await response.json();
      const booksData = json.works;

      setBooks(booksData);
    };

    fetchBooks().catch(console.error);
  }, [params.category]);

  return (
    <div>
      <h2 className="category-header">{params.category}</h2>
      <hr />
      {/* <Filters />
      <SortBar /> */}
      <div className="books-container">
        {books.map((book) => {
          return <BookCard key={book.key} book={book} addToCart={addToCart} />;
        })}
      </div>
    </div>
  );
};

export default Books;
