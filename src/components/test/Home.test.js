import React from "React";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Home from "../Home";

describe("Home", () => {
  it("renders home page with hero and category cards with links", () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(screen.getByLabelText("hero")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(4);
  });
});
