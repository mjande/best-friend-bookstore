import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CategoryCard from "../CategoryCard";
import { toHaveAttribute } from "@testing-library/jest-dom/dist/matchers";

describe("CategoryCard", () => {
  it("renders CategoryCard with link to category", () => {
    const { container } = render(<CategoryCard name="test" />, {
      wrapper: BrowserRouter,
    });

    const LinkElement = screen.getByRole("link");
    expect(LinkElement).toBeInTheDocument();
    expect(LinkElement).toHaveTextContent("Test");
    expect(LinkElement).toHaveAttribute("href", "/category/test");

    expect(container).toMatchSnapshot();
  });
});
