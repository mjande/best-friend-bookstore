import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import CategoryCard from "../CategoryCard";

describe("CategoryCard", () => {
  it("renders CategoryCard without errors", () => {
    const { container } = render(<CategoryCard name="test" />, {
      wrapper: BrowserRouter,
    });
    expect(container).toMatchSnapshot();
  });
});
