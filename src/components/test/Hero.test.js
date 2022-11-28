import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Hero";

describe("Hero", () => {
  it("renders hero with image and quote", () => {
    const { container } = render(<Hero />);

    const imgElement = screen.getByRole("img");
    const quoteElement = screen.getByRole("heading");

    expect(imgElement).toBeInTheDocument();
    expect(quoteElement.textContent).toBe(
      "“Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.”  Groucho Marx"
    );
    expect(container).toMatchSnapshot();
  });
});
