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
            <div className="item-container">
              <div className="item">
                <h4>{item.title}</h4>
                <div>{item.authors[0].name}</div>
              </div>
              <div className="quantity">10</div>
              <div className="item-price">$25.00</div>
              <div className="total-price">$250.00</div>
            </div>
          ))}
        </div>
        <div className="cart-data">Total $99.00</div>
      </div>
    </div>
  );
};

export default Cart;
