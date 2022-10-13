import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import NewTaskButton from "./../../components/NewTaskButton";

describe("<NewTaskButton/>", () => {
  const actionMock = jest.fn();
  const setup = () => {
    render(<NewTaskButton />);
  };
  beforeEach(() => {
    setup();
  });

  it("is render", () => {
    screen.getByText("Type to add new task");
  });

  it("dispatch an action when user click", () => {
    const el = screen.getByText("Type to add new task");
    userEvent.click(el);
  });
});
