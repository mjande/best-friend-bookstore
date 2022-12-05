import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookCard from "../BookCard";
import userEvent from "@testing-library/user-event";

describe("BookCard", () => {
  const book = {
    key: "0",
    title: "Test Title",
    authors: [{ name: "Test Author" }],
    cover_edition_key: "0",
  };

  it("renders book with image, title, author, and add to cart button", () => {
    render(<BookCard book={book} />);

    const imageElement = screen.getByRole("img", { name: "Book cover" });
    const titleElement = screen.getByRole("heading", { name: "Test Title" });
    const authorElement = screen.getByRole("heading", {
      name: "by Test Author",
    });
    const buttonElement = screen.getByRole("button", { name: "Add to Cart" });

    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls addToCart when clicking Add To Cart button", () => {
    const addToCartMock = jest.fn();

    render(<BookCard book={book} addToCart={addToCartMock} />);

    const button = screen.getByRole("button", { name: "Add to Cart" });
    expect(button).toHaveClass("not-in-cart");

    userEvent.click(button);

    expect(button).toHaveClass("in-cart");
    expect(addToCartMock.mock.calls.length).toBe(1);
  });
});
