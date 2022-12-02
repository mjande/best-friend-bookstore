import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App", () => {
  describe("Add To Cart button", () => {
    it("changes cart count in navbar", async () => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              works: [
                {
                  key: "1",
                  title: "Book1",
                  authors: [{ name: "Author1" }],
                  cover_id: "1",
                },
              ],
            }),
        })
      );

      render(
        <MemoryRouter initialEntries={["/books/test"]}>
          <App />
        </MemoryRouter>
      );

      const addToCartBtn = await screen.findByRole("button");
      userEvent.click(addToCartBtn);

      const cartCount = screen.getByTestId("cart-items-count");
      expect(cartCount.textContent).toBe("1 items");
    });
  });
});
