import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "../App";

describe("App", () => {
  describe("Add To Cart button", () => {
    const booksResponseMock = {
      json: () =>
        Promise.resolve({
          works: [
            {
              key: "0",
              title: "Mock Title",
              authors: [{ name: "Mock Author" }],
              cover_edition_key: "0",
            },
          ],
        }),
    };

    const workResponseMock = {
      json: () =>
        Promise.resolve({
          title: "Mock Title",
          authors: [{ author: { key: "0" } }],
        }),
    };

    const editionResponseMock = {
      json: () =>
        Promise.resolve({
          number_of_pages: 200,
          covers: ["#"],
        }),
    };

    const authorResponseMock = {
      json: () =>
        Promise.resolve({
          personal_name: "Mock Author",
        }),
    };

    beforeEach(
      () =>
        (global.fetch = jest
          .fn()
          .mockResolvedValueOnce(booksResponseMock)
          .mockResolvedValueOnce(workResponseMock)
          .mockResolvedValueOnce(editionResponseMock)
          .mockResolvedValueOnce(authorResponseMock))
    );

    it("changes cart count in navbar", async () => {
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
});
