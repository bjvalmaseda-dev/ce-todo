export interface ITask {
  content: string;
  id: number;
}

export type Action =
  | { type: "ADD_TASK"; payload: ITask }
  | { type: "REMOVE_TASK"; payload: number }
  | { type: "EDIT_TASK"; payload: { id: number; editTask: string } };

export interface AppState {
  tasks: ITask[];
}
