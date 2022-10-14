import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditTaskForm from "../../components/EditTaskForm";
import { ITask } from "../../types";

const task: ITask = {
  content: "Task to edit",
  id: "456",
};

describe("<EditTaskForm>", () => {
  it("render with the task content to edit", () => {
    render(<EditTaskForm task={task} />);
    const input = screen.getByLabelText("task-content") as HTMLInputElement;
    expect(input.value).toBe(task.content);
  });
  it("change the button when changed the task content", async () => {
    render(<EditTaskForm task={task} />);
    const input = screen.getByLabelText("task-content") as HTMLInputElement;
    userEvent.type(input, "Task updated");
    await screen.findByTestId("edit-save-button");
  });
});
