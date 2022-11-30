import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Books from "./components/Books";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:category" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
