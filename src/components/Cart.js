import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { floatToPriceString } from "../helpers";
import "../styles/Cart.css";

const Cart = ({ cartItems, updateQuantity }) => {
  function subtotalPrice() {
    const result = cartItems.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    return result;
  }

  function itemsDisplay() {
    if (cartItems.length === 0) {
      return (
        <tr>
          <td colSpan={4}>
            There are no items in your cart. <br />
            Discover books using the categories or search bar at the top of the
            page.
          </td>
        </tr>
      );
    }

    return cartItems.map((book, index) => (
      <CartItem key={index} book={book} updateQuantity={updateQuantity} />
    ));
  }

  return (
    <div className="cart-page" data-testid="cart-page">
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
          <tbody>{itemsDisplay()}</tbody>
        </table>
        <div className="order-summary" data-testid="order-summary">
          <h3>Order Summary</h3>
          <dl>
            <dt>Subtotal</dt>
            <dd>{floatToPriceString(subtotalPrice())}</dd>

            <dt>Shipping</dt>
            <dd>FREE</dd>

            <dt>Estimated Tax</dt>
            <dd>{floatToPriceString(subtotalPrice() * 0.06)}</dd>

            <dt>Total</dt>
            <dd>{floatToPriceString(subtotalPrice() * 1.06)}</dd>
          </dl>
          <Link className="button" to={process.env.PUBLIC_URL + "/checkout"}>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
