import BookCard from "./BookCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { kebabCaseToTitleCase } from "../helpers";

import "../styles/Category.css";

const Books = ({ addToCart, removeFromCart, isInCart }) => {
  const params = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchSubject() {
      const response = await fetch(
        `http://openlibrary.org/subjects/${params.query.toLowerCase()}.json`,
        {
          mode: "cors",
        }
      );

      const json = await response.json();
      const booksData = json.works;

      setBooks(booksData);
    }

    async function fetchSearch() {
      const response = await fetch(
        `http://openlibrary.org/search.json?q=${params.query}&limit=12`,
        { mode: "cors" }
      );

      const json = await response.json();
      const booksData = json.docs;

      console.log(booksData[7]);

      setBooks(booksData);
    }

    if (params.type === "subject") {
      fetchSubject();
    } else if (params.type === "search") {
      fetchSearch();
    }
  }, [params.query, params.type]);

  return (
    <div>
      <h2 className="category-header">{kebabCaseToTitleCase(params.query)}</h2>
      <hr />
      {/* <Filters />
      <SortBar /> */}
      <div className="books-container">
        {books.map((book) => {
          return (
            <BookCard
              key={book.key}
              book={book}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={isInCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Books;
