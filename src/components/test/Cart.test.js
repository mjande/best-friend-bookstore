import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";

describe("Cart", () => {
  it("renders page with headings and total price sidebar", () => {
    render(<Cart />);

    const cartHeading = screen.getByRole("heading", { name: "My Cart" });
    expect(cartHeading).toBeInTheDocument();

    const itemsHeading = screen.getByRole("heading", { name: "Items" });
    expect(itemsHeading).toBeInTheDocument();

    const quantityHeading = screen.getByRole("heading", { name: "Quantity" });
    expect(quantityHeading).toBeInTheDocument();

    const itemPriceHeading = screen.getByRole("heading", {
      name: "Item Price",
    });
    expect(itemPriceHeading).toBeInTheDocument();

    const totalHeading = screen.getByRole("heading", { name: "Total" });
    expect(totalHeading).toBeInTheDocument();

    expect(screen.getByTestId("cart-total")).toBeInTheDocument();
  });
});
