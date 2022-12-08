import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Hero";

describe("Hero", () => {
  it("renders hero with image and quote", () => {
    const { container } = render(<Hero />);

    const imgElement = screen.getByRole("img");
    const quoteElement = screen.getByLabelText("quote");

    expect(imgElement).toBeInTheDocument();
    expect(quoteElement.textContent).toBe(
      "A room without books is like a body without a soul."
    );
    expect(container).toMatchSnapshot();
  });
});
