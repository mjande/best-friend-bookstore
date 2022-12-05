import CartItem from "./CartItem";
import "../styles/Cart.css";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-page">
      <h2>My Cart</h2>
      <div className="cart-body">
        <table>
          <thead>
            <tr>
              <th className="item">Items</th>
              <th className="quantity">Quantity</th>
              <th className="price">Item Price</th>
              <th className="total-price">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((book, index) => (
              <CartItem key={index} book={book} />
            ))}
          </tbody>
        </table>
        <div className="cart-data" data-testid="cart-total">
          Total $99.00
        </div>
      </div>
    </div>
  );
};

export default Cart;
