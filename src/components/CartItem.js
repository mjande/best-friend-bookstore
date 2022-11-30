import "../styles/Cart.css";

const CartItem = ({ obj }) => {
  return (
    <div className="item-container">
      <div className="item">
        <h4>{obj.title}</h4>
        <div>{obj.authors[0].name}</div>
      </div>
      <div className="quantity">10</div>
      <div className="item-price">$25.00</div>
      <div className="total-price">$250.00</div>
    </div>
  );
};

export default CartItem;
