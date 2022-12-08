import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";

describe("Cart", () => {
  it("renders page with headings, items, and total price sidebar", () => {
    const cartItems = [
      {
        coverSrc: "#",
        title: "title1",
        author: "author1",
        quantity: 1,
        price: 5,
      },
      {
        coverSrc: "#",
        title: "title2",
        author: "author2",
        quantity: 1,
        price: 7,
      },
    ];

    render(<Cart cartItems={cartItems} />);

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

    const cartItemElements = screen.getAllByRole("row", { name: "cart-item" });
    expect(cartItemElements).toHaveLength(2);

    expect(screen.getByTestId("order-summary")).toBeInTheDocument();
  });

  it("renders empty cart message with empty cart", () => {
    render(<Cart cartItems={[]} />);

    expect(
      screen.getByText(
        "There are no items in your cart. Discover books using the categories or search bar at the top of the page."
      )
    ).toBeInTheDocument();
  });
});
