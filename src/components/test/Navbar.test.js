import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("renders navbar with header and links", () => {
    const { container } = render(<Navbar />);

    const headerElement = screen.getByRole("heading");
    const links = screen.getAllByRole("link");

    expect(headerElement.textContent).toBe("Best Friend Bookstore");
    expect(links).toHaveLength(3);

    expect(container).toMatchSnapshot();
  });
});
