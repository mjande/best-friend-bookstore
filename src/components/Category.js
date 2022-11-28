import Book from "./Book";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "../styles/Category.css";

const Category = () => {
  const params = useParams();
  const categoryTitle =
    params.category.at(0).toUpperCase() + params.category.slice(1);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${params.category}&maxResults=10&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        { mode: "cors" }
      );
      const json = await response.json();
      const booksData = json.items;
      setBooks(booksData);
    };

    fetchBooks().catch(console.error);
  }, [params.category]);

  return (
    <div>
      <h2 className="category-header">{categoryTitle}</h2>
      <hr />
      {/* <Filters />
      <SortBar /> */}
      <div className="books-container">
        {books.map((book) => {
          return (
            <Book
              key={book.id}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors[0]}
              rating={book.volumeInfo.averageRating}
              image={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.smallThumbnail
                  : "https://via.placeholder.com/150x200.png?text=No+Cover+Available"
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
