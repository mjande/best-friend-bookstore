import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  it("renders navbar with header and links", () => {
    const { container } = render(<Navbar />, { wrapper: BrowserRouter });

    const headerElement = screen.getByRole("heading");
    const links = screen.getAllByRole("link");

    expect(headerElement.textContent).toBe("Best Friend Bookstore");
    expect(links).toHaveLength(3);

    expect(container).toMatchSnapshot();
  });
});
