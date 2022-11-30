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
        <div className="cart-items-container">
          <div className="cart-items-labels">
            <h3 className="item">Items</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="item-price">Item Price</h3>
            <h3 className="total-price">Total</h3>
          </div>
          {cartItems.map((item) => (
            <CartItem obj={item} />
          ))}
        </div>
        <div className="cart-data">Total $99.00</div>
      </div>
    </div>
  );
};

export default Cart;
