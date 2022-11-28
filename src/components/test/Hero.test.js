import React from "react";
import { render } from "@testing-library/react";
import Hero from "../Hero";

describe("Hero", () => {
  it("renders hero without errors", () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});
