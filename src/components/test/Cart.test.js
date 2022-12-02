import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";

describe("Cart", () => {
  it("renders page with headings and total price sidebar", () => {
    render(<Cart />);

    const cartHeading = screen.getByRole("heading", { name: "My Cart" });
    expect(cartHeading).toBeInTheDocument();

    const itemsHeader = screen.getByRole("columnheader", { name: "Items" });
    expect(itemsHeader).toBeInTheDocument();

    const quantityHeader = screen.getByRole("columnheader", {
      name: "Quantity",
    });
    expect(quantityHeader).toBeInTheDocument();

    const itemPriceHeader = screen.getByRole("columnheader", {
      name: "Item Price",
    });
    expect(itemPriceHeader).toBeInTheDocument();

    const totalHeader = screen.getByRole("columnheader", { name: "Total" });
    expect(totalHeader).toBeInTheDocument();

    expect(screen.getByTestId("cart-total")).toBeInTheDocument();
  });
});
