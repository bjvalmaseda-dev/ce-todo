import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Task from "./Task";
import { ITask } from "../types";

describe("<Task/>", () => {
  it("can be render a task", () => {
    const task: ITask = {
      content: "Test 1",
      id: 2,
    };
    render(<Task task={task} />);
    expect(screen.getByText(task.content).innerHTML).toContain(task.content);
  });
});
