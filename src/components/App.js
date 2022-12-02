import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Books from "./Books";
import Cart from "./Cart";
import "../styles/App.css";

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
