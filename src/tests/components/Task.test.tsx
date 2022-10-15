import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Task from "./../../components/Task";
import { ITask } from "../../types";

describe("<Task/>", () => {
  it("can be render a task", () => {
    const task: ITask = {
      content: "Test",
      id: "2",
    };
    render(<Task task={task} />);
    expect(screen.getByText(task.content).innerHTML).toContain(task.content);
  });

  it("render the tags with format", () => {
    const task: ITask = {
      content: "task whit an @mention test@example.com #hashtag www.link.test",
      id: "2",
    };
    render(<Task task={task} />);

    const email = screen.getByText("Mail 1");
    const mention = screen.getByText("@mention");
    const link = screen.getByText("Link 1");
    const hashtag = screen.getByText("#hashtag");

    expect(email).toHaveClass("bg-orange-200 text-orange-500");
    expect(link).toHaveClass("bg-blue-200 text-blue-500");
    expect(mention).toHaveClass("bg-green-200 text-green-500");
    expect(hashtag).toHaveClass("bg-purple-200 text-purple-500");
  });
});
