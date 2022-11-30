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
          <h3>Items</h3>
          <h3>Quantity</h3>
          <h3>Item Price</h3>
          <h3>Total</h3>
          {cartItems.map((item) => (
            <div>{item.title}</div>
          ))}
        </div>
        <div className="cart-data">Total $99.00</div>
      </div>
    </div>
  );
};

export default Cart;
