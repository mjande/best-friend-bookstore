import "../styles/Cart.css";

const CartItem = ({ obj }) => {
  return (
    <tr className="item-container" aria-label="cart-item">
      <td className="item">
        <h4>{obj.title}</h4>
        <div>{obj.authors[0].name}</div>
      </td>
      <td className="quantity">10</td>
      <td className="price">$25.00</td>
      <td className="total-price">$250.00</td>
    </tr>
  );
};

export default CartItem;
