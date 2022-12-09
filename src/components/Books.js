import BookCard from "./BookCard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { kebabCaseToTitleCase } from "../helpers";

import "../styles/Books.css";

const Books = ({ addToCart, removeFromCart, isInCart }) => {
  const params = useParams();
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    // TODO: Extract to POJO
    async function fetchSubject() {
      const response = await fetch(
        `https://openlibrary.org/subjects/${params.query.toLowerCase()}.json?offset=${
          page * 12
        }`,
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
        `https://openlibrary.org/search.json?q=${params.query}&limit=12&offset=${page}`,
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
  }, [params.query, params.type, page]);

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
      <div className="page-control">
        <button
          className={`link ${page === 0 ? "invisible" : ""}`}
          onClick={() => setPage(page - 1)}
        >
          &lt;&lt;
        </button>
        <div>{page + 1}</div>
        <button className="link" onClick={() => setPage(page + 1)}>
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Books;
