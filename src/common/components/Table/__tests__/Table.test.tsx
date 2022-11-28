import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table } from "../Table";

describe("Table", () => {
  afterEach(() => {
    cleanup();
  });

  const defaultData = {
    columns: [
      { title: "First Header", dataIndex: "firstField" },
      { title: "Second Header", dataIndex: "secondField" },
      { title: "Third Header", dataIndex: "thirdField" },
      { title: "Fourth Header", dataIndex: "fourthField" },
    ],
    dataSource: [
      {
        firstField: "First Cell",
        secondField: "Second Cell",
        thirdField: "Third Cell",
        fourthField: "Fourth Cell",
        key: "First Entry",
      },
      {
        firstField: "First Cell",
        secondField: "Second Cell",
        thirdField: "Third Cell",
        fourthField: "Fourth Cell",
        key: "Second Entry",
      },
      {
        firstField: "First Cell",
        secondField: "Second Cell",
        thirdField: "Third Cell",
        fourthField: "Fourth Cell",
        key: "Third Entry",
      },
      {
        firstField: "First Cell",
        secondField: "Second Cell",
        thirdField: "Third Cell",
        fourthField: "Fourth Cell",
        key: "Fourth Entry",
      },
    ],
  };

  it("renders Table and checks headers", () => {
    render(<Table {...defaultData} />);

    const headers = screen.getAllByText(/\w{1,} Header/);

    expect(headers).toHaveLength(4);
  });

  it("renders Table and checks cells", () => {
    render(<Table {...defaultData} />);

    const cells = screen.getAllByText(/\w{1,} Cell/);

    expect(cells).toHaveLength(16);
  });
});
