import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HighlightedInput from "../../components/HighlightedInput";

describe("<HighlightedInput/>", () => {
  it("render email highlighted", () => {
    const setValue = jest.fn();
    render(
      <HighlightedInput value="bjvalmaseda@email.com" setValue={setValue} />
    );
    const email = screen.getByText("bjvalmaseda@email.com");
    expect(email).toHaveClass("text-orange-500");
  });

  it("render link highlighted", () => {
    const setValue = jest.fn();
    const value = "www.link.com";
    render(<HighlightedInput value={value} setValue={setValue} />);
    const email = screen.getByText(value);
    expect(email).toHaveClass("text-blue-500");
  });

  it("render mention highlighted", () => {
    const setValue = jest.fn();
    const value = "@mention";
    render(<HighlightedInput value={value} setValue={setValue} />);
    const email = screen.getByText(value);
    expect(email).toHaveClass("text-green-500");
  });

  it("render hashtag highlighted", () => {
    const setValue = jest.fn();
    const value = "#hashtag";
    render(<HighlightedInput value={value} setValue={setValue} />);
    const email = screen.getByText(value);
    expect(email).toHaveClass("text-purple-500");
  });
});
