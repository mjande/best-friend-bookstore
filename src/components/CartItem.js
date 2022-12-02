import { toPriceString } from "../helpers";
import "../styles/Cart.css";

const CartItem = ({ book }) => {
  return (
    <tr className="item-container" aria-label="cart-item">
      <td className="description" data-testid="item-description">
        <h4>{book.title}</h4>
        <div>{book.authors[0].name}</div>
      </td>
      <td className="quantity" data-testid="item-quantity">
        {book.quantity}
      </td>
      <td className="price" data-testid="item-price">
        {book.price}
      </td>
      <td className="total-price" data-testid="item-total-price">
        {toPriceString(book.quantity * book.price)}
      </td>
    </tr>
  );
};

export default CartItem;
