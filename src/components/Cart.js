import CartItem from "./CartItem";
import "../styles/Cart.css";

const Cart = () => {
  const cartItems = [
    { title: "Book1", authors: [{ name: "Author1" }], cover_id: "1" },
    { title: "Book2", authors: [{ name: "Author2" }], cover_id: "2" },
  ];

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
            {cartItems.map((item, index) => (
              <CartItem key={index} book={item} />
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
