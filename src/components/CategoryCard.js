import { Link } from "react-router-dom";
import { kebabCaseToTitleCase } from "../helpers";
import "../styles/CategoryCard.css";

const CategoryCard = ({ name }) => {
  return (
    <div className={`category ${name}`}>
      <Link to={`/books/subject/${name}`} className="category-link">
        {kebabCaseToTitleCase(name)}
      </Link>
    </div>
  );
};

export default CategoryCard;
