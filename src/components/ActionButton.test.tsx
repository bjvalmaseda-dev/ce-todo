import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ActionButton from "./ActionButton";

describe("<ActionButton/>", () => {
  const props = {
    label: "Action",
    container: true,
    icon: <div>icon</div>,
  };

  describe("is render with", () => {
    const setup = () => {
      render(<ActionButton {...props} />);
    };

    beforeEach(() => {
      setup();
    });
    it("is render with a label", () => {
      screen.getByText(props.label);
    });

    it("is render with a color if is container", () => {
      const el = screen.getByRole("button");
      expect(el).toHaveClass("bg-gray-300");
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
