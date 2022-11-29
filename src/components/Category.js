import Book from "./Book";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "../styles/Category.css";

/* 
Fetch Books Pathway
- Fetch category using subject API
- Returns Works Key (...W)
- Fetch Work page using Work Key

*/

const Category = () => {
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
          return (
            <Book
              key={book.key}
              workKey={book.key}
              title={book.title}
              author={book.authors[0].name}
              coverSrc={book.cover_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
