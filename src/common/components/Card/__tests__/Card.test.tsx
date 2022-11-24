import { screen, render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Card } from "../Card";

describe("Card", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders Card with simple title and body", () => {
    render(<Card title="Card Title">Card Body</Card>);

    const card = screen.getByText("Card Title");

    expect(card).toBeInTheDocument();
  });

  it("renders inner Card", () => {
    render(
      <Card type="inner" title="Card Title">
        Card Body
      </Card>
    );

    const header = screen.getByText("Card Title");

    expect(header).toHaveClass("ant-card-head-title");
  });
});
