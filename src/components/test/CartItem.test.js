import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "../CartItem";

describe("CartItem", () => {
  it("renders with item name, quantity, price, and total price", () => {
    const book = {
      title: "test",
      authors: [{ name: "test" }],
      quantity: 2,
      price: 5.0,
    };

    render(
      <table>
        <tbody>
          <CartItem book={book} />
        </tbody>
      </table>
    );

    const description = screen.getByTestId("item-description");
    expect(description).toBeInTheDocument();

    const quantity = screen.getByTestId("item-quantity");
    expect(quantity).toBeInTheDocument();

    const price = screen.getByTestId("item-price");
    expect(price).toBeInTheDocument();

    const totalPrice = screen.getByTestId("item-total-price");
    expect(totalPrice.textContent).toBe("$10.00");
  });
});
