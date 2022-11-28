import Book from "./Book";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "../styles/Category.css";

const Category = () => {
  const params = useParams();
  const category =
    params.category.at(0).toUpperCase() + params.category.slice(1);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=3&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        { mode: "cors" }
      );
      const json = await response.json();
      const booksData = json.items;
      setBooks(booksData);
    };

    fetchBooks().catch(console.error);
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      {/* <Filters />
      <SortBar /> */}
      <div className="books-container">
        {books.map((book) => {
          return (
            <Book
              key={book.id}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors[0]}
              image={book.volumeInfo.imageLinks.smallThumbnail}
              rating={book.volumeInfo.averageRating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
