import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import NewNoteButton from "./NewNoteButton";

describe("<NewNoteButton/>", () => {
  const actionMock = jest.fn();
  const setup = () => {
    render(<NewNoteButton action={actionMock} />);
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
    expect(actionMock).toHaveBeenCalledTimes(1);
  });
});
