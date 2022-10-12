import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ActionButton from "./ActionButton";
import userEvent from "@testing-library/user-event";

describe("<ActionButton/>", () => {
  const props = {
    label: "Action",
    container: true,
    icon: <div>icon</div>,
    action: jest.fn(),
  };

  describe("is render with", () => {
    const setup = () => {
      render(<ActionButton {...props} />);
    };

    let el: HTMLButtonElement;
    beforeEach(() => {
      setup();
      el = screen.getByRole("button");
    });
    it("is render with a label", () => {
      screen.getByText(props.label);
    });

    it("is render with a color if is container", () => {
      expect(el).toHaveClass("bg-gray-300");
    });

    it("execute a action when is clicked", () => {
      userEvent.click(el);
      expect(props.action).toHaveBeenCalledTimes(1);
    });
  });

  describe("have status", () => {
    it("disabled", () => {
      render(<ActionButton {...props} disabled />);
      const el = screen.getByRole("button");
      expect(el).toHaveClass("text-gray-400 mr-2 cursor-not-allowed");
    });
    it("enabled", () => {
      render(<ActionButton {...props} />);
      const el = screen.getByRole("button");
      expect(el).toHaveClass("cursor-pointer text-gray-500");
    });
  });
});
