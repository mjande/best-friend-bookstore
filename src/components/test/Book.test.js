import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Book from "../Book";

describe("Book", () => {
  it("renders book with image, title, author, and rating", () => {
    const { container } = render(
      <Book title="Test Title" author="Test Author" image="#" rating="5" />
    );

    const imageElement = screen.getByRole("img", { name: "Book cover" });
    const titleElement = screen.getByRole("heading", { name: "Test Title" });
    const authorElement = screen.getByRole("heading", {
      name: "By Test Author",
    });
    const starsContainer = screen.getByRole("img", { name: /^Rating/ });

    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(starsContainer).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("renders 2 and a half solid stars for a rating of 2.5", () => {
    render(
      <Book title="Test Title" author="Test Author" image="#" rating="2.5" />
    );

    expect(screen.getAllByTestId("star-solid")).toHaveLength(2);
    expect(screen.getAllByTestId("star-half-solid")).toHaveLength(1);
    expect(screen.getAllByTestId("star-empty")).toHaveLength(2);
  });

  it("renders one solid star for a rating of 1", () => {
    render(<Book rating="1" />);

    expect(screen.getAllByTestId("star-solid")).toHaveLength(1);
    expect(screen.getAllByTestId("star-empty")).toHaveLength(4);
    expect(screen.queryAllByTestId("star-half-solid")).toHaveLength(0);
  });
});
