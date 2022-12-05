import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Books from "./Books";
import Cart from "./Cart";
import "../styles/App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

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
      title: work.title,
      author: author,
      quantity: 1,
      price: edition.number_of_pages ? edition.number_of_pages * 0.05 : 10,
    };

    setCartItems([...cartItems, book]);
  }

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books/:category"
          element={<Books addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </div>
  );
};

export default App;
