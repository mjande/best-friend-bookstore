import Hero from "./Hero";
import CategoryCard from "./CategoryCard";
import uniqid from "uniqid";

import "../styles/Home.css";

const Home = () => {
  const categories = ["Mystery", "Romance", "Science Fiction", "Fantasy"];

  return (
    <div>
      <Hero />
      <div className="categories">
        {categories.map((category) => (
          <CategoryCard name={category} key={uniqid()} role="article" />
        ))}
      </div>
    </div>
  );
};

export default Home;
