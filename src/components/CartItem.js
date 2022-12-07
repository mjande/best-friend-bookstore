import { floatToPriceString } from "../helpers";
import "../styles/Cart.css";

const CartItem = ({ book, updateQuantity }) => {
  function onChange(e) {
    const newQuantity = e.target.value;

    if (newQuantity === "") {
      return;
    }

    updateQuantity(book.key, newQuantity);
  }

  return (
    <tr className="item-container" aria-label="cart-item">
      <td className="description">
        <div className="flex">
          <img src={book.coverSrc} alt="Cover" data-testid="cover-image"></img>
          <div>
            <h4 data-testid="item-title">{book.title}</h4>
            <div data-testid="item-author">{book.author}</div>
          </div>
        </div>
      </td>
      <td className="quantity" data-testid="item-quantity">
        <input
          type="number"
          onChange={onChange}
          defaultValue={book.quantity}
        ></input>
      </td>
      <td className="price" data-testid="item-price">
        {floatToPriceString(book.price)}
      </td>
      <td className="total-price" data-testid="item-total-price">
        {floatToPriceString(book.price * book.quantity)}
      </td>
    </tr>
  );
};

export default CartItem;
