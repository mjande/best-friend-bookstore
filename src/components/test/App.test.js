import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "../App";

describe("App", () => {
  describe("Add To Cart button", () => {
    it("changes cart count in navbar", async () => {
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

      const responseMock = {
        json: () =>
          Promise.resolve({
            title: "Mock Title",
            authors: [{ author: { key: "0" } }],
            author: "Mock Author",
            number_of_pages: 200,
          }),
      };

      global.fetch = jest
        .fn()
        .mockResolvedValueOnce(booksResponseMock)
        .mockResolvedValue(responseMock);

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
  });
});
