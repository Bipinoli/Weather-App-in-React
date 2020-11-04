import React from "react";
import { render, screen } from "@testing-library/react";
import HighlightCard from "../HighlightCard";

describe("components/HighlightCard", () => {
  test("renders properly", () => {
    const props = {
      title: "highlight card title",
      primaryInfo: "primary info",
      secondaryInfo: "secondary info",
    };
    render(<HighlightCard {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.primaryInfo)).toBeInTheDocument();
    expect(screen.getByText(props.secondaryInfo)).toBeInTheDocument();
  });
});
