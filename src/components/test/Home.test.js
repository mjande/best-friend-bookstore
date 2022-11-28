import React from "React";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Home from "../Home";

const HeroMock = () => <div>HeroMock</div>;
const CategoryCardMock = ({ name }) => <div>{name}Mock</div>;
jest.mock("../Hero", () => HeroMock);
jest.mock("../CategoryCard", (props) => CategoryCardMock);

describe("Home", () => {
  it("renders home page with hero and category cards", () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(screen.getByText("HeroMock")).toBeInTheDocument();
    expect(screen.getByText("mysteryMock")).toBeInTheDocument();
    expect(screen.getByText("romanceMock")).toBeInTheDocument();
    expect(screen.getByText("science-fictionMock")).toBeInTheDocument();
    expect(screen.getByText("fantasyMock")).toBeInTheDocument();
  });
});
