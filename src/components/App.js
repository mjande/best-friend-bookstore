import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Books from "./Books";
import Cart from "./Cart";
import "../styles/App.css";

const App = ({ initialCartItems = [] }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  function isInCart(key) {
    return cartItems.some((book) => book.cover_edition_key === key);
  }

  async function addToCart(e) {
    const workID = e.target.dataset.workId;
    const workResponse = await fetch(`https://openlibrary.org${workID}.json`);
    const work = await workResponse.json();

    const editionID = e.target.dataset.editionId;
    const editionResponse = await fetch(
      `https://openlibrary.org/books/${editionID}.json`
    );
    const edition = await editionResponse.json();

    const authorID = work.authors[0].author.key;
    const authorResponse = await fetch(
      `https://openlibrary.org${authorID}.json`
    );
    const author = await authorResponse.json();

    const book = {
      key: edition.key,
      title: work.title,
      author: author.personal_name,
      quantity: 1,
      price: edition.number_of_pages ? edition.number_of_pages * 0.05 : 10,
      coverSrc: `https://covers.openlibrary.org/b/id/${edition.covers[0]}-M.jpg`,
    };

    setCartItems([...cartItems, book]);
  }

  function removeFromCart(e) {
    const cartIndex = cartItems.findIndex(
      (book) => book.key === e.target.dataset.editionId
    );

    if (cartIndex === -1) {
      console.error("Something went wrong.");
      return;
    }

    setCartItems([
      ...cartItems.slice(0, cartIndex),
      ...cartItems.slice(cartIndex + 1),
    ]);
  }

  function updateQuantity(bookKey, newQuantity) {
    const cartIndex = cartItems.findIndex((book) => book.key === bookKey);

    const book = { ...cartItems[cartIndex], quantity: newQuantity };

    const newCart = [
      ...cartItems.slice(0, cartIndex),
      book,
      ...cartItems.slice(cartIndex + 1),
    ];

    setCartItems(newCart);
  }

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books/:category"
          element={
            <Books
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              isInCart={isInCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} updateQuantity={updateQuantity} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
