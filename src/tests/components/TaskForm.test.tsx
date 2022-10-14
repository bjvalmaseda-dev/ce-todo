import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TaskForm from "../../components/TaskForm";
import userEvent from "@testing-library/user-event";

describe("<TaskForm/>", () => {
  it("render a form with the action button disabled", () => {
    render(<TaskForm />);
    const buttons = screen.getAllByRole("button") as HTMLButtonElement[];
    const actionButtons = buttons.filter((b) => b.disabled);
    actionButtons.forEach((b) =>
      expect(b).toHaveClass("text-gray-400 cursor-not-allowed")
    );
    expect(actionButtons).toHaveLength(5);
  });

  it("activate button when user type somethings", () => {
    render(<TaskForm />);
    const buttons = screen.getAllByRole("button") as HTMLButtonElement[];
    const input = screen.getByLabelText("task-content");
    userEvent.type(input, "some task");
    const disabledButtons = buttons.filter((b) => b.disabled);
    expect(disabledButtons).toHaveLength(0);
  });
});
