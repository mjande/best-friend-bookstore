import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Books from "./components/Books";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(e) {
    const workID = e.target.dataset.workId;

    setCartItems([...cartItems, workID]);
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
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
