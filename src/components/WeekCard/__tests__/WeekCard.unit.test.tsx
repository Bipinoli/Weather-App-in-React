import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import WeekCard from "../WeekCard";

describe("components/WeekCard", () => {
  const props = {
    day: "Sun",
    imgSrc: "image url",
    temp: 22,
    index: 3,
    clickHandler: jest.fn(),
    selected: true,
  };

  test("renders properly", () => {
    render(<WeekCard {...props} />);
    expect(screen.getByText(props.day)).toBeInTheDocument();
    expect(screen.getByAltText("icon").getAttribute("src")).toBe(props.imgSrc);
    expect(screen.getByText(/22.*/)).toBeInTheDocument();
  });

  test("behaves properly when clicked", () => {
    render(<WeekCard {...props} />);
    fireEvent.click(screen.getByText(props.day));
    expect(props.clickHandler).toHaveBeenCalled();
  });
});
