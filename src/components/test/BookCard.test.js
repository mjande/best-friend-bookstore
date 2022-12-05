import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookCard from "../BookCard";

describe("BookCard", () => {
  it("renders book with image, title, author", () => {
    const book = {
      key: "0",
      title: "Test Title",
      authors: [{ name: "Test Author" }],
      cover_edition_key: "0",
    };

    render(<BookCard book={book} />);

    const imageElement = screen.getByRole("img", { name: "Book cover" });
    const titleElement = screen.getByRole("heading", { name: "Test Title" });
    const authorElement = screen.getByRole("heading", {
      name: "by Test Author",
    });

    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
  });
});
