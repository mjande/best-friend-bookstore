import React from "react";
import { render, screen } from "@testing-library/react";
import Books from "../Books";

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    category: "test",
  }),
}));

describe("Books", () => {
  it("renders books collection with header and books", async () => {
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
              {
                key: "2",
                title: "Book2",
                authors: [{ name: "Author2" }],
                cover_id: "2",
              },
            ],
          }),
      })
    );

    render(<Books />);

    const headerElement = screen.getByRole("heading");
    const bookElements = await screen.findAllByRole("article");

    expect(headerElement.textContent).toBe("test");
    expect(bookElements).toHaveLength(2);
  });
});
