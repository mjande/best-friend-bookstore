import { Link } from "react-router-dom";
import "../styles/CategoryCard.css";

const CategoryCard = (props) => {
  const categoryTitle = props.name.at(0).toUpperCase() + props.name.slice(1);

  return (
    <div className={`category ${props.name}`}>
      <Link to={`/category/${props.name}`} className="category-link">
        {categoryTitle}
      </Link>
    </div>
  );
};

export default CategoryCard;
