import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskList from "./../../components/TaskList";
import { ITask } from "../../types";

describe("<NoteList/>", () => {
  it("can be render a list of task", () => {
    const tasks: ITask[] = [
      {
        content: "Test 1",
        id: 2,
      },
      {
        content: "Test 2",
        id: 3,
      },
    ];
    render(<TaskList tasks={tasks} />);
    const list = screen.getAllByRole("listitem");
    expect(list).toHaveLength(tasks.length);
  });
});
