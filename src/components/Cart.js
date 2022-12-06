import CartItem from "./CartItem";
import { floatToPriceString } from "../helpers";
import "../styles/Cart.css";

const Cart = ({ cartItems }) => {
  const fakeCartItems = [
    {
      author: "Swift, Jonathan",
      coverSrc: "https://covers.openlibrary.org/b/id/12717083-M.jpg",
      key: "/books/OL26445784M",
      price: 23.200000000000003,
      quantity: 1,
      title: "Gulliver's Travels",
    },
    {
      author: "William Shakespeare",
      coverSrc: "https://covers.openlibrary.org/b/id/7205924-M.jpg",
      key: "/books/OL24594641M",
      price: 3.2,
      quantity: 1,
      title: "A Midsummer Night's Dream",
    },
    {
      author: "J. R. R. Tolkien",
      coverSrc: "https://covers.openlibrary.org/b/id/8406786-M.jpg",
      key: "/books/OL10682512M",
      price: 14.350000000000001,
      quantity: 1,
      title: "The Hobbit",
    },
  ];

  function subtotalPrice() {
    const result = fakeCartItems.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    return result;
  }

  function itemsDisplay() {
    if (fakeCartItems.length === 0) {
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

    return fakeCartItems.map((book, index) => (
      <CartItem key={index} book={book} />
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
        </div>
      </div>
    </div>
  );
};

export default Cart;
