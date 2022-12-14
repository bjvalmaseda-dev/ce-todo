import { render, screen, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Context from "../context/AppContext";
import App from "../App";
import axios from "axios";
import { ITask } from "../types";
import userEvent from "@testing-library/user-event";

const setup = async () => {
  render(
    <Context>
      <App />
    </Context>
  );
  await waitFor(() => screen.findByText("Type to add new task"));
};

const tasks: ITask[] = [
  {
    content: "Task 1",
    id: "task1",
  },
  {
    content: "Task 2",
    id: "task2",
  },
];

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("<App/>", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({ data: tasks });
    setup();
  });

  it("render a tasks list", async () => {
    await screen.findAllByRole("listitem");
  });

  it("render error when network fails and close after 3 seconds", async () => {
    mockedAxios.get.mockRejectedValue({ message: "Something is wrong" });
    setup();
    await screen.findByText("Network error");
  });

  describe("Add a task", () => {
    const newTask: ITask = {
      content: "Task add from test whit an email email@example.com",
      id: "idtask25",
    };
    it("render new task form", async () => {
      mockedAxios.post.mockResolvedValue({ data: newTask });

      const addButton = screen.getByText("Type to add new task");
      userEvent.click(addButton);

      const input = await waitFor(() => screen.findByLabelText("task-content"));
      userEvent.type(input, newTask.content);
      const saveButton = screen.getByText("Add");
      userEvent.click(saveButton);
      await waitFor(() => screen.findByText("email@example.com"));
    });

    it("render error message if network error", async () => {
      mockedAxios.post.mockRejectedValue({
        message: "Something is wrong",
      });

      const addButton = screen.getByText("Type to add new task");
      userEvent.click(addButton);

      const input = await waitFor(() => screen.findByLabelText("task-content"));
      userEvent.type(input, newTask.content);
      const saveButton = screen.getByText("Add");
      userEvent.click(saveButton);

      await waitFor(() => screen.findByText("Network error"));
      const el = screen.queryByText("email@example.com");

      expect(el).toBeNull();
    });
  });

  describe("Edit a task", () => {
    it("can edit a task", async () => {
      mockedAxios.put.mockResolvedValue({
        data: { content: "Task 1 #mentions", id: "task1" },
      });

      const tasksNode = await screen.findAllByRole("listitem");
      const tasksList = tasksNode.map((node) =>
        within(node).getByLabelText("task-item")
      );
      userEvent.click(tasksList[0]);

      const input = (await screen.findByLabelText(
        "task-content"
      )) as HTMLInputElement;
      userEvent.type(input, " Edited");
      const buttonSave = screen.getByTestId("edit-save-button");
      userEvent.click(buttonSave);

      await screen.findByText("#mentions");
    });

    it("can remove a task", async () => {
      mockedAxios.delete.mockResolvedValue(() => true);

      const tasksNode = await screen.findAllByRole("listitem");
      const tasksList = tasksNode.map((node) =>
        within(node).getByLabelText("task-item")
      );
      userEvent.click(tasksList[0]);

      const removeButton = screen.getByRole("button", { name: /Remove/i });
      userEvent.click(removeButton);

      await waitFor(() =>
        expect(screen.queryAllByRole("listitem")).toHaveLength(tasks.length - 1)
      );
    });

    it("render error message if error network", async () => {
      mockedAxios.put.mockRejectedValue({
        message: "Something is wrong",
      });

      const tasksNode = await screen.findAllByRole("listitem");
      const tasksList = tasksNode.map((node) =>
        within(node).getByLabelText("task-item")
      );
      userEvent.click(tasksList[0]);

      const input = (await screen.findByLabelText(
        "task-content"
      )) as HTMLInputElement;
      userEvent.type(input, "Edited");
      const buttonSave = screen.getByTestId("edit-save-button");
      userEvent.click(buttonSave);
      await waitFor(() => screen.findByText("Network error"));
    });
  });
});
