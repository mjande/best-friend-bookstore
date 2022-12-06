import CartItem from "./CartItem";
import "../styles/Cart.css";

const Cart = ({ cartItems }) => {
  console.log(cartItems);
  
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

    return cartItems.map((book, index) => <CartItem key={index} book={book} />);
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
        <div className="cart-data" data-testid="cart-total">
          Total $99.00
        </div>
      </div>
    </div>
  );
};

export default Cart;
