import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import getResponseMocks from "./responseMocks";
import App from "../App";

describe("App", () => {
  const {
    booksResponseMock,
    workResponseMock,
    editionResponseMock,
    authorResponseMock,
  } = getResponseMocks();

  beforeEach(
    () =>
      (global.fetch = jest
        .fn()
        .mockResolvedValueOnce(booksResponseMock)
        .mockResolvedValueOnce(workResponseMock)
        .mockResolvedValueOnce(editionResponseMock)
        .mockResolvedValueOnce(authorResponseMock))
  );

  describe("Add To Cart button", () => {
    it("increments cart item count in navbar", async () => {
      render(
        <MemoryRouter initialEntries={["/books/test"]}>
          <App />
        </MemoryRouter>
      );

      const addToCartBtn = await screen.findByRole("button");
      userEvent.click(addToCartBtn);

      const newCartCount = await screen.findByText("1 items");
      expect(newCartCount).toBeInTheDocument();
    });

    it("displays new cart item on cart page", async () => {
      render(
        <MemoryRouter initialEntries={["/books/test"]}>
          <App />
        </MemoryRouter>
      );

      const addToCartBtn = await screen.findByRole("button");
      userEvent.click(addToCartBtn);

      const cartPageLink = screen.getByRole("link", { name: /items/i });
      userEvent.click(cartPageLink);

      const coverElement = await screen.findByTestId("cover-image");
      expect(coverElement).toBeInTheDocument();

      const titleElement = await screen.findByTestId("item-title");
      expect(titleElement).toHaveTextContent("Mock Title");

      const authorElement = await screen.findByTestId("item-author");
      expect(authorElement).toHaveTextContent("Mock Author");

      const quantityElement = await screen.findByTestId("item-quantity");
      expect(quantityElement).toHaveTextContent("1");

      const priceElement = await screen.findByTestId("item-price");
      expect(priceElement).toHaveTextContent("$10.00");

      const totalPriceElement = await screen.findByTestId("item-total-price");
      expect(totalPriceElement).toHaveTextContent("$10.00");
    });
  });

  describe("Remove from Cart Button", () => {
    const book = {
      title: "Mock Title",
      authors: [{ name: "Mock Author" }],
      cover_edition_key: "0",
    };

    it("decrements cart item count in navbar", async () => {
      render(
        <MemoryRouter initialEntries={["/books/test"]}>
          <App initialCartItems={[book]} />
        </MemoryRouter>
      );

      const removeFromCartBtn = await screen.findByRole("button", {
        name: "Remove from Cart",
      });
      userEvent.click(removeFromCartBtn);

      const cartCount = await screen.findByText("0 items");
      expect(cartCount).toBeInTheDocument();
    });

    it("removes item from cart page", async () => {
      render(
        <MemoryRouter initialEntries={["/books/test"]}>
          <App initialCartItems={[book]} />
        </MemoryRouter>
      );

      const removeFromCartBtn = await screen.findByRole("button", {
        name: "Remove from Cart",
      });
      userEvent.click(removeFromCartBtn);

      const cartPageLink = screen.getByRole("link", { name: "0 items" });
      userEvent.click(cartPageLink);

      expect(await screen.findByTestId("cart-page")).toBeInTheDocument();
      expect(screen.queryByTestId("item-title")).not.toBeInTheDocument();
    });
  });
});
