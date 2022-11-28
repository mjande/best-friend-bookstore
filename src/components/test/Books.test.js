import React from "react";
import { render, screen } from "@testing-library/react";
import Book from "../Book";

describe("Book", () => {
  it("renders book without errors", () => {
    const { container } = render(
      <Book title="Test Title" author="Test Author" image="#" rating="5" />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders correct number of stars based on rating", () => {
    render(
      <Book title="Test Title" author="Test Author" image="#" rating="2" />
    );
    const starsContainer = screen.getByRole("img", { name: /^Rating/ });
    expect(starsContainer).toMatchInlineSnapshot();
  });
});
